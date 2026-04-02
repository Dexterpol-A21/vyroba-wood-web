const fs = require('fs');

// Add CadGrid into Layout.astro
let layout = fs.readFileSync('src/layouts/Layout.astro', 'utf8');
if (!layout.includes('CadGrid')) {
  layout = layout.replace(
    "import Header from '../components/Header.astro';",
    "import Header from '../components/Header.astro';\nimport CadGrid from '../components/grids/CadGrid';"
  );
  layout = layout.replace(
    "<body class=\"font-satoshi text-on-surface bg-surface min-h-screen flex flex-col selection:bg-secondary selection:text-on-secondary\">",
    "<body class=\"font-satoshi text-on-surface min-h-screen flex flex-col selection:bg-secondary selection:text-on-secondary\">\n\t\t<CadGrid client:load />"
  );
  fs.writeFileSync('src/layouts/Layout.astro', layout);
}

// Clean up index.astro (remove the test sections and keep only one Hero)
let indexStr = fs.readFileSync('src/pages/index.astro', 'utf8');
const regex = /import DraftingGrid.*BlueprintGrid';/s;
indexStr = indexStr.replace(regex, '');

const heroesRegex = /<!-- Hero 1: DRAFTING GRID -->([\s\S]*?)<!-- Visual Process Steps -->/;
const cleanHero = `<!-- Hero: THE ENGINEERED ORGANIC -->
<section class="relative min-h-[921px] flex items-center px-10 border-b border-outline-variant/20">      
<div class="grid grid-cols-12 w-full gap-8 items-center relative z-10 pointer-events-none">
<div class="col-span-12 lg:col-span-8 pointer-events-auto">
<span class="font-space font-bold tracking-[0.3em] text-xs text-secondary/90 uppercase mb-5 block">Precisión Industrial // Esencia Natural</span>
<h1 class="text-[clamp(3.5rem,10vw,8rem)] font-black leading-[0.85] tracking-tighter text-primary uppercase mb-8 font-cabinet">
                        LO<br/>ORGÁNICO<br/>DISEÑADO
                    </h1>
<p class="max-w-xl text-body-lg text-on-surface-variant font-medium leading-relaxed">
                        Desafiamos lo rústico. Nuestra arquitectura digital transforma la fibra natural en componentes de alta ingeniería mediante procesos controlados por datos.
                    </p>
<div class="mt-12 flex space-x-4">
<button class="cursor-pointer bg-primary text-on-primary px-10 py-5 font-black uppercase tracking-widest text-sm border border-primary shadow-[6px_6px_0_0_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#000000] active:shadow-none active:translate-y-[6px] active:translate-x-[6px] transition-all duration-150">
                            Explorar Especificaciones
                        </button>
<button class="cursor-pointer bg-surface border border-primary text-primary px-10 py-5 font-black uppercase tracking-widest text-sm shadow-[6px_6px_0_0_#162839] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#162839] active:shadow-none active:translate-y-[6px] active:translate-x-[6px] transition-all duration-150">
                            Ver Planta Industrial
                        </button>
</div>
</div>
</div>
<div class="absolute right-0 top-0 bottom-0 w-1/3 opacity-30 mix-blend-multiply lg:mix-blend-normal pointer-events-none z-10">
<div class="h-full w-full relative overflow-hidden [mask-image:linear-gradient(to_left,black_50%,transparent_100%)]">
<img class="w-full h-full object-cover" data-alt="Wood" src="/images/stitch/stitch_1.jpg"/>
</div>
</div>
</section>

<!-- Visual Process Steps -->`;

indexStr = indexStr.replace(heroesRegex, cleanHero);
fs.writeFileSync('src/pages/index.astro', indexStr);

console.log('Global CAD inserted');
