import fs from 'fs';

const pages = [
  'src/components/Header.astro',
  'src/pages/index.astro',
  'src/pages/b2b-portal.astro',
  'src/pages/wood-library.astro',
  'src/pages/artisan.astro'
];

pages.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace font-headline with font-cabinet
    content = content.replace(/font-headline/g, 'font-cabinet');
    // Replace font-sans with font-cabinet on headers and nav links
    content = content.replace(/font-sans/g, 'font-cabinet');
    // For anything that was simply text-7xl font-black, make sure it has font-cabinet
    content = content.replace(/class="([^"]*)text-([789]xl|\[clamp)([^"]*)"/g, (match, p1, p2, p3) => {
        if (!match.includes('font-cabinet')) {
            return `class="${p1}text-${p2}${p3} font-cabinet"`;
        }
        return match;
    });

    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
