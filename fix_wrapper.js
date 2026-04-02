const fs = require('fs');

const path = 'src/pages/index.astro';
let content = fs.readFileSync(path, 'utf8');

// Replace the A tag for Cocinas
content = content.replace(
    /<a href="\/cocinas" class="([^"]+)">/g,
    `<!-- Outer wrapper for 3D effect -->
            <div class="w-full bg-[#162839] border border-[#162839] outline outline-1 outline-outline-variant/30 rounded-sm">
                <a href="/cocinas" class="relative top-0 shadow-none block h-full bg-surface-container-lowest p-10 border border-outline-variant/30 transition-all duration-300 ease-in-out group-hover:-top-3 group-hover:shadow-[0_0.4em_0.1em_0.019em_#8a501c] group cursor-pointer flex flex-col justify-between arc-card">`
);
content = content.replace(
    /<\/a>\s*<!-- Line 2: Closets -->/g,
    `    </a>
            </div>

            <!-- Line 2: Closets -->`
);

// Replace the A tag for Closets
content = content.replace(
    /<a href="\/closets" class="([^"]+)">/g,
    `<!-- Outer wrapper for 3D effect -->
            <div class="w-full bg-[#162839] border border-[#162839] outline outline-1 outline-outline-variant/30 rounded-sm">
                <a href="/closets" class="relative top-0 shadow-none block h-full bg-surface-container-lowest p-10 border border-outline-variant/30 transition-all duration-300 ease-in-out group-hover:-top-3 group-hover:shadow-[0_0.4em_0.1em_0.019em_#fdb074] group cursor-pointer flex flex-col justify-between arc-card">`
);

content = content.replace(
    /<\/a>\s*<!-- Line 3: Puertas -->/g,
    `    </a>
            </div>

            <!-- Line 3: Puertas -->`
);

// Replace the A tag for Puertas
content = content.replace(
    /<a href="\/paneleria" class="([^"]+)">/g,
    `<!-- Outer wrapper for 3D effect -->
            <div class="w-full bg-[#162839] border border-[#162839] outline outline-1 outline-outline-variant/30 rounded-sm">
                <a href="/paneleria" class="relative top-0 shadow-none block h-full bg-surface-container-lowest p-10 border border-outline-variant/30 transition-all duration-300 ease-in-out group-hover:-top-3 group-hover:shadow-[0_0.4em_0.1em_0.019em_#8B3A36] group cursor-pointer flex flex-col justify-between arc-card">`
);

content = content.replace(
    /<\/a>\s*<\/div>\s*<\/div>\s*<\/section>/g,
    `    </a>
            </div>
        </div>
    </div>
</section>`
);


const script = `
<script>
    // Reveal script for lenis smooth scroll combination
    document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const el = entry.target;
                    // Trigger the 'pop up' on scroll into view
                    el.classList.remove('top-0', 'shadow-none');
                    el.classList.add('-top-3');
                    
                    if (el.href.includes('cocinas')) el.classList.add('shadow-[0_0.4em_0.1em_0.019em_#8a501c]');
                    if (el.href.includes('closets')) el.classList.add('shadow-[0_0.4em_0.1em_0.019em_#162839]');
                    if (el.href.includes('paneleria')) el.classList.add('shadow-[0_0.4em_0.1em_0.019em_#8B3A36]');

                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.arc-card').forEach(card => observer.observe(card));
    });
</script>
`;

if (!content.includes('Reveal script for lenis')) {
    content = content.replace('</Layout>', script + '\n</Layout>');
}

fs.writeFileSync(path, content);
console.log('Wrappers updated.');
