import fs from 'fs';
import path from 'path';

const pages = [
  'src/pages/index.astro',
  'src/pages/b2b-portal.astro',
  'src/pages/wood-library.astro',
  'src/pages/artisan.astro'
];

pages.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace font-label with font-space and adjust tracking/sizes to feel more technical
    content = content.replace(/font-label/g, 'font-space font-semibold tracking-[0.25em] text-xs');
    
    fs.writeFileSync(file, content);
  }
});
