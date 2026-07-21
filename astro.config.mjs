// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://vyroba.com.mx',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      serialize(item) {
        // Homepage gets highest priority
        if (item.url === 'https://vyroba.com.mx/') {
          return { ...item, priority: 1.0, changefreq: 'daily' };
        }
        // Legal pages get lower priority
        if (item.url.includes('/terminos') || item.url.includes('/privacidad')) {
          return { ...item, priority: 0.3, changefreq: 'yearly' };
        }
        // Service pages
        if (item.url.includes('/cocinas') || item.url.includes('/closets') || item.url.includes('/puertas') || item.url.includes('/contacto')) {
          return { ...item, priority: 0.9 };
        }
        return item;
      },
    }),
  ]
});