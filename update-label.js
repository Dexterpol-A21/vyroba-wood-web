import fs from 'fs';

const file = 'src/pages/index.astro';
let content = fs.readFileSync(file, 'utf8');

// The current span: 
// <span class="font-label text-secondary tracking-widest uppercase mb-4 block">Precisión Industrial | Esencia Natural</span>
content = content.replace(
  '<span class="font-label text-secondary tracking-widest uppercase mb-4 block">Precisión Industrial | Esencia Natural</span>',
  '<span class="font-space font-bold tracking-[0.3em] text-xs text-secondary/90 uppercase mb-5 block">Precisión Industrial // Esencia Natural</span>'
);

fs.writeFileSync(file, content);
console.log('Updated kickoff label in index!');
