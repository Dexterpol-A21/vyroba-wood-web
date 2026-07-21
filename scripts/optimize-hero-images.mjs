/**
 * Regenera variantes optimizadas del hero y logo.
 * Uso: node scripts/optimize-hero-images.mjs
 */
import sharp from 'sharp';
import { mkdir, stat } from 'fs/promises';
import path from 'path';

const root = 'public/images';
const outDir = path.join(root, 'opt');
await mkdir(outDir, { recursive: true });
await mkdir(path.join(outDir, 'kitchen'), { recursive: true });
await mkdir(path.join(outDir, 'brand'), { recursive: true });

async function optimize(input, outputs) {
  const meta = await sharp(input).metadata();
  console.log(`IN  ${input} → ${meta.width}x${meta.height}`);
  for (const { file, width, quality } of outputs) {
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toFile(file);
    const s = await stat(file);
    const m = await sharp(file).metadata();
    console.log(`OUT ${file} → ${m.width}x${m.height} ${(s.size / 1024).toFixed(1)} KiB`);
  }
}

const heroes = [
  { in: path.join(root, 'Hero1Madera.webp'), base: 'Hero1Madera' },
  { in: path.join(root, 'Hero2CNC .webp'), base: 'Hero2CNC' },
  { in: path.join(root, 'Hero3VOLUMEN .webp'), base: 'Hero3VOLUMEN' },
  { in: path.join(root, 'Hero4Cocinacost.webp'), base: 'Hero4Cocinacost' },
  { in: path.join(root, 'kitchen', 'Hero5full kitchen .webp'), base: 'kitchen/Hero5full-kitchen' },
];

for (const h of heroes) {
  await optimize(h.in, [
    { file: path.join(outDir, `${h.base}-450.webp`), width: 450, quality: 72 },
    { file: path.join(outDir, `${h.base}-900.webp`), width: 900, quality: 75 },
  ]);
}

await optimize(path.join(root, 'brand', 'vyrobaWhite.webp'), [
  { file: path.join(outDir, 'brand/vyrobaWhite-112.webp'), width: 112, quality: 80 },
  { file: path.join(outDir, 'brand/vyrobaWhite-200.webp'), width: 200, quality: 80 },
]);

console.log('Done');
