const fs = require('fs');
const path = 'src/pages/index.astro';
let content = fs.readFileSync(path, 'utf8');

// The block to replace is the entire section #lineas-de-produccion
// From: <section id="lineas-de-produccion"
// To: </section> before <!-- Visual Process Steps -->

const oldSectionRegex = /<section id="lineas-de-produccion"[^>]*>[\s\S]*?<\/section>/;

const newSection = `<!-- Soluciones B2B / What we do -->
<section id="lineas-de-produccion-wrapper" class="overflow-hidden bg-surface relative z-10 border-b border-outline-variant/20">
    <div class="pin-container min-h-screen flex flex-col justify-center py-24">
        <div class="px-10 mb-16 shrink-0 w-full max-w-7xl mx-auto">
            <h2 class="font-bold tracking-[0.2em] text-sm uppercase text-secondary mb-2">Líneas de Producción</h2>
            <h3 class="text-4xl md:text-5xl font-black uppercase tracking-tighter text-primary font-cabinet">Equipamiento para Desarrollos</h3>
            <p class="max-w-2xl text-on-surface-variant font-medium mt-6 text-lg">
                Manufacturamos y ensamblamos mobiliario fijo a gran escala para equipar torres residenciales, hotelería y complejos corporativos. Un solo proveedor, calidad estandarizada en cientos de unidades.
            </p>
        </div>

        <div class="horizontal-scroll-container flex gap-8 px-10 w-max pb-12">
            <!-- Line 1: Cocinas -->
            <div class="w-[85vw] md:w-[450px] shrink-0 bg-[#212121] rounded-sm gsap-card">
                <a href="/cocinas" data-shadow="shadow-[0_0.4em_0.1em_0.019em_#8a501c]" class="dynamic-card relative block h-full bg-surface-container-lowest p-10 border border-outline-variant/30 group cursor-pointer flex flex-col justify-between hover:border-[#8a501c]/50">
                    <div>
                        <div class="flex justify-between items-start mb-6">
                            <span class="text-5xl font-black text-outline/30 group-hover:text-[#8a501c] transition-colors block">01</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter" class="w-10 h-10 text-outline/40 group-hover:text-[#8a501c] transition-colors">
                                <!-- Gabinetes superiores (Alacenas) -->
                                <rect x="4" y="3" width="16" height="7"></rect>     
                                <line x1="12" y1="3" x2="12" y2="10"></line>        
                                <!-- Tiradores superiores -->
                                <line x1="10" y1="8" x2="10" y2="9"></line>
                                <line x1="14" y1="8" x2="14" y2="9"></line>

                                <!-- Cubierta / Encimera que sobresale -->
                                <rect x="2" y="14" width="20" height="2"></rect>    

                                <!-- Gabinetes base inferiores -->
                                <rect x="4" y="16" width="16" height="6"></rect>    
                                <line x1="12" y1="16" x2="12" y2="22"></line>       
                                <!-- Tiradores inferiores -->
                                <line x1="10" y1="17" x2="10" y2="18"></line>       
                                <line x1="14" y1="17" x2="14" y2="18"></line>       
                            </svg>
                        </div>
                        <h4 class="text-2xl font-black uppercase mb-4 text-primary group-hover:text-[#8a501c] transition-colors">Cocinas Integrales</h4>
                        <p class="text-on-surface-variant font-medium leading-relaxed mb-8">
                            Producción en serie de módulos de cocina. Desde gabinetes y alacenas hasta barras, con herrajes de alta resistencia listos para instalación rápida.
                        </p>
                    </div>
                </a>
            </div>

            <!-- Line 2: Closets -->
            <div class="w-[85vw] md:w-[450px] shrink-0 bg-[#212121] rounded-sm gsap-card">
                <a href="/closets" data-shadow="shadow-[0_0.4em_0.1em_0.019em_#162839]" class="dynamic-card relative block h-full bg-surface-container-lowest p-10 border border-outline-variant/30 group cursor-pointer flex flex-col justify-between hover:border-[#162839]/50">
                    <div>
                        <div class="flex justify-between items-start mb-6">
                            <span class="text-5xl font-black text-outline/30 group-hover:text-[#162839] transition-colors block">02</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter" class="w-10 h-10 text-outline/40 group-hover:text-[#162839] transition-colors">
                                <rect x="3" y="3" width="18" height="18"></rect>    
                                <line x1="12" y1="3" x2="12" y2="21"></line>        
                                <line x1="3" y1="9" x2="12" y2="9"></line>
                                <line x1="3" y1="15" x2="12" y2="15"></line>        
                                <line x1="12" y1="7" x2="21" y2="7"></line>
                                <line x1="16.5" y1="7" x2="16.5" y2="10"></line>    
                            </svg>
                        </div>
                        <h4 class="text-2xl font-black uppercase mb-4 text-primary group-hover:text-[#162839] transition-colors">Clósets y Vestidores</h4>
                        <p class="text-on-surface-variant font-medium leading-relaxed mb-8">
                            Sistemas de almacenamiento optimizados espacialmente. Diseños modulares adaptables a cualquier plano arquitectónico con acabados premium.
                        </p>
                    </div>
                </a>
            </div>

            <!-- Line 3: Puertas -->
            <div class="w-[85vw] md:w-[450px] shrink-0 bg-[#212121] rounded-sm gsap-card">
                <a href="/puertas" data-shadow="shadow-[0_0.4em_0.1em_0.019em_#8B3A36]" class="dynamic-card relative block h-full bg-surface-container-lowest p-10 border border-outline-variant/30 group cursor-pointer flex flex-col justify-between hover:border-[#8B3A36]/50">
                    <div>
                        <div class="flex justify-between items-start mb-6">
                            <span class="text-5xl font-black text-outline/30 group-hover:text-[#8B3A36] transition-colors block">03</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter" class="w-10 h-10 text-outline/40 group-hover:text-[#8B3A36] transition-colors">
                                <rect x="5" y="3" width="14" height="18"></rect>    
                                <rect x="7" y="5" width="10" height="16"></rect>    
                                <line x1="14" y1="13" x2="15" y2="13"></line>       
                            </svg>
                        </div>
                        <h4 class="text-2xl font-black uppercase mb-4 text-primary group-hover:text-[#8B3A36] transition-colors">Puertas</h4>
                        <p class="text-on-surface-variant font-medium leading-relaxed mb-8">
                            Puertas de alta densidad con fabricación y ruteo de precisión. Incluyen marco, chambrana y preparaciones exactas listas para su instalación.
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>`;

content = content.replace(oldSectionRegex, newSection);

fs.writeFileSync(path, content);
