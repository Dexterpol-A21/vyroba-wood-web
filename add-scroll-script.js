const fs = require('fs');

const path = 'src/pages/index.astro';
let content = fs.readFileSync(path, 'utf8');

// The classes I used:
// Inner a tag: `-top-3`, `shadow-[0_0.4em_...`
// When inactive/pressed down (initial state): `top-0`, shadow-none
// Let's modify the cards to have an "unrevealed" state, and remove it on scroll!

// Actually, we can add a class `.arcade-card` to the inner `a` tags, and manage the transform with a small script.
// Let's replace the fixed tailwind hover with group hover + active class.
// We'll update the inner `a` tag classes.

content = content.replace(
    /class="relative -top-3([^"]+)hover:top-0 hover:shadow-none([^"]+)"/g,
    'class="relative top-0 shadow-none $1group-hover:top-0 group-hover:shadow-none $2 reveal-card transform transition-all duration-700 delay-100"'
);

// Add the intersection observer script to the end of the file, before </body> or </Layout>
const script = `
<script>
    // Reveal cards on scroll with Lenis (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                // When in view, pop them up!
                // The cards have top-0 and shadow-none initially. We replace them with the popped up state.
                const el = entry.target;
                el.classList.remove('top-0', 'shadow-none');
                el.classList.add('-top-3'); // Pop up
                
                // Keep the specific shadow color depending on the border-hover class or just apply a general shadow utility
                if (el.href.includes('cocinas')) el.classList.add('shadow-[0_0.4em_0.1em_0.019em_#8a501c]');
                if (el.href.includes('closets')) el.classList.add('shadow-[0_0.4em_0.1em_0.019em_#162839]');
                if (el.href.includes('paneleria')) el.classList.add('shadow-[0_0.4em_0.1em_0.019em_#8B3A36]');

                observer.unobserve(el);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.reveal-card').forEach(card => observer.observe(card));
</script>
`;

// wait, the script should be inside </Layout>
if (!content.includes('Reveal cards on scroll')) {
    content = content.replace('</Layout>', script + '\n</Layout>');
}

fs.writeFileSync(path, content);
