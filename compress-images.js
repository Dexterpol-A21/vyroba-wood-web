import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

// Escoger la carpeta base de imágenes
const imagesDir = './public/images';

async function processDirectory(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            // Recursivo para carpetas anidadas
            await processDirectory(fullPath);
        } else {
            const ext = path.extname(entry.name).toLowerCase();
            // Solo procesamos JPGs y PNGs
            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                
                const webpPath = fullPath.replace(ext, '.webp');
                const avifPath = fullPath.replace(ext, '.avif');
                
                console.log(`📸 Optimizando: ${entry.name}`);
                
                try {
                    // Generar WebP
                    await sharp(fullPath)
                        .webp({ quality: 80, effort: 6 })
                        .toFile(webpPath);
                        
                    // Generar AVIF (Más tardado pero más ligero)
                    await sharp(fullPath)
                        .avif({ quality: 75, effort: 4 })
                        .toFile(avifPath);

                } catch (error) {
                    console.error(`❌ Error al procesar ${entry.name}:`, error);
                }
            }
        }
    }
}

console.log('🚀 Iniciando compresión de imágenes a WebP y AVIF...');
console.log('Tus imágenes originales se mantendrán completamente intactas.\n');

await processDirectory(imagesDir);

console.log('\n✅ ¡Proceso terminado! Ahora tienes copias .webp y .avif junto a las originales.');
