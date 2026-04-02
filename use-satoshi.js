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
    
    // Replace font-body and font-inter with font-satoshi
    content = content.replace(/font-body/g, 'font-satoshi');
    content = content.replace(/font-inter/g, 'font-satoshi');
    // We already replaced font-sans with font-cabinet on headers, but just in case:
    content = content.replace(/font-sans/g, 'font-satoshi');

    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
