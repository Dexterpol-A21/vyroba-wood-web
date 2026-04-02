import fs from 'fs';
import path from 'path';
import https from 'https';

const htmlDir = './src/pages/stitch_raw_html';
const imageDir = './public/images/stitch';

if (!fs.existsSync(imageDir)){
    fs.mkdirSync(imageDir, { recursive: true });
}

let imageCounter = 1;
const urlMap = {};

function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                const file = fs.createWriteStream(dest);
                response.pipe(file);
                file.on('finish', () => {
                    file.close(resolve);
                });
            } else {
                reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
            }
        }).on('error', (err) => {
            reject(err.message);
        });
    });
}

async function run() {
    const files = fs.readdirSync(htmlDir).filter(f => f.endsWith('.html'));
    
    for (const file of files) {
        const filePath = `${htmlDir}/${file}`;
        let content = fs.readFileSync(filePath, 'utf8');
        
        const regex = /src="(https:\/\/lh3\.googleusercontent\.com\/[^"]+)"/g;
        const bgRegex = /url\('(https:\/\/lh3\.googleusercontent\.com\/[^']+)'\)/g;
        
        let match;
        const toDownload = new Set();
        
        while ((match = regex.exec(content)) !== null) { toDownload.add(match[1]); }
        while ((match = bgRegex.exec(content)) !== null) { toDownload.add(match[1]); }
        
        for (const url of Array.from(toDownload)) {
            if (!urlMap[url]) {
                const ext = '.jpg';
                const localName = `stitch_${imageCounter++}${ext}`;
                urlMap[url] = `/images/stitch/${localName}`;
                
                console.log(`Downloading ${localName}...`);
                try {
                    await downloadImage(url, `./public/images/stitch/${localName}`);
                } catch (e) {
                    console.error(`Error downloading ${url}:`, e);
                }
            }
            content = content.split(url).join(urlMap[url]);
        }
        
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${file}`);
    }
}

run();
