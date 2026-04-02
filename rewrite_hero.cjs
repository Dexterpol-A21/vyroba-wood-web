const fs = require('fs');

const path = 'src/pages/index.astro';
let content = fs.readFileSync(path, 'utf8');

const regex = /<!-- Hero: THE ENGINEERED ORGANIC -->([\s\S]*?)<\/section>/;

const newHeroes = `<!-- Hero: THE ENGINEERED ORGANIC -->
<section class="relative min-h-[921px] flex items-center px-10 overflow-hidden border-b border-outline-variant/20">      
<DraftingGrid client:load />

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
<!-- Hero Visual Decoration -->
<div class="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 lg:opacity-100 mix-blend-multiply lg:mix-blend-normal pointer-events-none z-10">
<div class="h-full w-full bg-surface-container-high relative overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Macro close-up of dark oak wood grain with technical white blueprint lines and vector points overlaid on the texture" src="/images/stitch/stitch_1.jpg"/>
</div>
</div>
</section>`;

content = content.replace(regex, newHeroes);
fs.writeFileSync(path, content);
console.log('Hero clean.');
