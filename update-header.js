import fs from 'fs';

const headerPath = 'src/components/Header.astro';
let headerContent = fs.readFileSync(headerPath, 'utf8');

const oldLogoHTML = `<a href="/" class="text-2xl font-black tracking-tighter text-primary uppercase hover:text-secondary transition-colors">
      VYROBA WOOD
    </a>`;

const newLogoHTML = `<a href="/" class="inline-flex flex-col items-center justify-center bg-primary px-6 py-4 hover:bg-primary-container transition-colors group">
      <img src="/images/brand/vyrobaWhite.png" alt="Vyroba" class="h-6 w-auto object-contain" />
      <span class="text-on-primary font-sans font-bold tracking-[0.5em] text-[0.65rem] mt-1 ml-1 group-hover:text-secondary transition-colors">WOOD</span>
    </a>`;

headerContent = headerContent.replace(oldLogoHTML, newLogoHTML);
fs.writeFileSync(headerPath, headerContent);
console.log('Header updated!');
