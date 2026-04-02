import fs from 'fs';

const inputHtml = fs.readFileSync('src/pages/stitch_raw_html/b2b-portal.html', 'utf8');

// Extract the body content
const bodyMatch = inputHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
let bodyContent = bodyMatch ? bodyMatch[1] : inputHtml;

// Remove script tags at the end of body usually injected by stitch
bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/gi, '');

// Clean up Tailwind classes based on the design system
// 1. Remove rounded corners
bodyContent = bodyContent.replace(/\brounded-[a-z0-9-]+\b/g, '');
bodyContent = bodyContent.replace(/\brounded\b/g, '');

// 2. Remove shadows, use ambient depth (we will keep some default classes or replace shadow-md)
bodyContent = bodyContent.replace(/\bshadow-[a-z0-9-]+\b/g, '');
bodyContent = bodyContent.replace(/\bshadow\b/g, '');

const astroComponent = `---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Vyroba Wood - B2B Developer Portal">
${bodyContent}
</Layout>
`;

fs.writeFileSync('src/pages/index.astro', astroComponent);
console.log('Converted b2b-portal.html to index.astro');
