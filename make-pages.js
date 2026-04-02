import fs from 'fs';

// 1. Create Header component
const headerHtml = `---
---
<header class="bg-surface rounded-none border-none w-full sticky top-0 z-50 shadow-none">
  <div class="flex justify-between items-center px-10 py-6 max-w-full mx-auto blueprint-grid">
    <a href="/" class="text-2xl font-black tracking-tighter text-primary uppercase hover:text-secondary transition-colors">
      VYROBA WOOD
    </a>
    <nav class="hidden md:flex items-center space-x-8">
      <a class="font-sans font-black uppercase tracking-[-0.02em] text-outline hover:text-primary transition-colors" href="/wood-library">Catálogo</a>
      <a class="font-sans font-black uppercase tracking-[-0.02em] text-outline hover:text-primary transition-colors" href="/artisan">Artesanía</a>
      <a class="font-sans font-black uppercase tracking-[-0.02em] text-outline hover:text-primary transition-colors" href="/industrial-process">Proceso</a>
      <a class="font-sans font-black uppercase tracking-[-0.02em] text-outline hover:text-primary transition-colors" href="/b2b-portal">B2B Portal</a>
      <a class="bg-primary hover:bg-primary-container text-on-primary font-sans font-black uppercase tracking-[0.05em] px-8 py-4 transition-all duration-150" href="#contact">
        Contactar
      </a>
    </nav>
  </div>
</header>
`;
fs.mkdirSync('src/components', { recursive: true });
fs.writeFileSync('src/components/Header.astro', headerHtml);

// 2. Update Layout.astro
const layoutHtml = `---
import '../styles/global.css';
import Header from '../components/Header.astro';

interface Props {
  title: string;
}

const { title } = Astro.props;
---

<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content="Vyroba Wood - Engineered Organic" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
    <title>{title}</title>
  </head>
  <body class="bg-surface text-on-surface antialiased font-sans">
    <Header />
    <div class="blueprint-grid min-h-screen">
      <slot />
    </div>
  </body>
</html>
`;
fs.writeFileSync('src/layouts/Layout.astro', layoutHtml);

// 3. Define parsing logic
function convertFile(srcFile, destFile, pageTitle) {
  let content = fs.readFileSync('src/pages/stitch_raw_html/' + srcFile, 'utf8');
  
  // Extract content inside <main> to avoid duplicate <body> and <nav>
  const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  let mainContent;
  if (mainMatch) {
    mainContent = mainMatch[1];
  } else {
    // Fallback if no main, get body and remove nav
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    mainContent = bodyMatch ? bodyMatch[1] : content;
    mainContent = mainContent.replace(/<nav[\s\S]*?<\/nav>/gi, '');
    mainContent = mainContent.replace(/<header[\s\S]*?<\/header>/gi, '');
  }

  // Remove script tags
  mainContent = mainContent.replace(/<script[\s\S]*?<\/script>/gi, '');

  // Clean design system conflicting classes
  mainContent = mainContent.replace(/\brounded-[a-z0-9-]+\b/g, '');
  mainContent = mainContent.replace(/\brounded\b/g, '');
  mainContent = mainContent.replace(/\bshadow-[a-z0-9-]+\b/g, '');
  mainContent = mainContent.replace(/\bshadow\b/g, '');

  const astroFormat = `---
import Layout from '../layouts/Layout.astro';
---

<Layout title="${pageTitle}">
  <main class="relative">
    ${mainContent}
  </main>
</Layout>
`;

  fs.writeFileSync('src/pages/' + destFile, astroFormat);
  console.log(`Converted ${srcFile} to ${destFile}`);
}

// Convert all using the mapped destinations
// Setting industrial-process as the primary index
convertFile('industrial-process.html', 'index.astro', 'Vyroba Wood - The Engineered Organic');
convertFile('b2b-portal.html', 'b2b-portal.astro', 'Vyroba Wood - Portal B2B');
convertFile('wood-library.html', 'wood-library.astro', 'Vyroba Wood - Catálogo de Maderas');
convertFile('artisan.html', 'artisan.astro', 'Vyroba Wood - El Don de la Madera');

