import fs from 'fs/promises';
import path from 'path';

async function processDirectory(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            if (['node_modules', '.git', '.astro', 'dist', 'public'].includes(entry.name)) {
                continue;
            }
            await processDirectory(fullPath);
        } else {
            const ext = path.extname(entry.name).toLowerCase();
            if (['.astro', '.jsx', '.tsx', '.html'].includes(ext)) {
                let content = await fs.readFile(fullPath, 'utf8');
                
                // Matches <img ... src="/images/something.jpg" ... />
                const imgRegex = /<img\b([^>]*?)src=["']([^"']+\.(png|jpg|jpeg))["']([^>]*?)\/?>/gi;

                const newContent = content.replace(imgRegex, (match, beforeSrc, srcPath, extGroup, afterSrc) => {
                    const avifSrc = srcPath.replace(/\.(png|jpg|jpeg)$/i, '.avif');
                    const webpSrc = srcPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
                    
                    return `<picture>
  <source srcset="${avifSrc}" type="image/avif" />
  <source srcset="${webpSrc}" type="image/webp" />
  <img${beforeSrc}src="${srcPath}"${afterSrc}/>
</picture>`;
                });

                if (newContent !== content) {
                    await fs.writeFile(fullPath, newContent, 'utf8');
                    console.log(`✅ Actualizado: ${fullPath}`);
                }
            }
        }
    }
}

console.log('Buscando y reemplazando <img> por <picture> en /src...');
await processDirectory('./src');
console.log('¡Listo!');
