import fs from 'fs/promises';
import path from 'path';

const processFiles = async (dir) => {
  const files = await fs.readdir(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    const stat = await fs.stat(filepath);
    if (stat.isDirectory()) {
      await processFiles(filepath);
    } else if (filepath.endsWith('.astro') || filepath.endsWith('.tsx') || filepath.endsWith('.jsx')) {
      let content = await fs.readFile(filepath, 'utf8');
      const original = content;

      // Regex para encontrar <img> tags en el HTML/JSX de Astro que no estén ya dentro de <picture>
      // Esta regex es básica, asume que todavía no usamos <picture>
      const imgRegex = /<img\s+([^>]*?)src=(["'])([^"']+\.(png|jpg|jpeg))\2([^>]*?)\/?>/gi;

      content = content.replace(imgRegex, (match, prefix, quote, src, ext, suffix) => {
        // En un .astro donde pasamos `<img ... />` o `<img ...>`, lo envolvemos en <picture>
        const basePath = src.substring(0, src.lastIndexOf('.'));
        const avif = basePath + '.avif';
        const webp = basePath + '.webp';

        // Reconstruimos los atributos originales arreglando espacios
        const originalAttrs = `${prefix.trim()} src="${src}" ${suffix.trim()}`.replace(/\s+/g, ' ').trim();

        // Envolvemos con <picture class="contents"> para no romper flex/grid padres
        return `<picture class="contents">\n  <source srcset="${avif}" type="image/avif" />\n  <source srcset="${webp}" type="image/webp" />\n  <img ${originalAttrs} />\n</picture>`;
      });

      if (original !== content) {
        await fs.writeFile(filepath, content, 'utf8');
        console.log(`✅ Updated: ${filepath}`);
      }
    }
  }
};

processFiles('./src')
  .then(() => console.log('All image tags wrapped in <picture>!'))
  .catch(err => console.error(err));
