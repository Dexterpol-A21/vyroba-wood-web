const fs = require('fs');
const path = 'src/pages/index.astro';
let content = fs.readFileSync(path, 'utf8');

const oldScriptRegex = /<script>[\s\S]*?const observer = new IntersectionObserver[\s\S]*?<\/script>/;

const newScript = `<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);

    document.addEventListener("DOMContentLoaded", () => {
        const wrapper = document.querySelector("#lineas-de-produccion-wrapper");
        const scrollContainer = document.querySelector(".horizontal-scroll-container");
        const cards = gsap.utils.toArray('.gsap-card');

        if (wrapper && scrollContainer) {
            // First set all cards to "flat" state (pushed down)
            cards.forEach(cardEl => {
                const innerCard = cardEl.querySelector('.dynamic-card');
                if (innerCard) {
                    gsap.set(innerCard, { y: 0, boxShadow: "none" });
                }
            });

            // Calculate the total scroll amount needed
            const getScrollAmount = () => {
                let scrollWidth = scrollContainer.scrollWidth;
                return -(scrollWidth - window.innerWidth + 80); // padding tweak
            };

            // Main timeline for pinning and sideways scrolling
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapper,
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + (scrollContainer.scrollWidth),
                    invalidateOnRefresh: true
                }
            });

            // Tween the container horizontally
            tl.to(scrollContainer, {
                x: getScrollAmount,
                ease: "none"
            }, 0);

            // Pop them up ONE BY ONE using stagger while scrolling
            cards.forEach((cardEl, idx) => {
                const innerCard = cardEl.querySelector('.dynamic-card');
                if (innerCard) {
                    const shadowStr = innerCard.getAttribute('data-shadow');
                    // Extract color format: shadow-[0_0.4em_0.1em_0.019em_#8a501c] -> #8a501c
                    let hex = "#162839";
                    const match = shadowStr.match(/#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/);
                    if(match) hex = match[0];

                    tl.to(innerCard, {
                        y: "-0.4em", // "pops up"
                        boxShadow: \`0 0.4em 0.1em 0.019em \${hex}\`,
                        ease: "power2.out",
                        duration: 0.1
                    }, idx * 0.2); // This creates the "uno a la vez" effect as you scroll
                }
            });
        }
    });
</script>`;

content = content.replace(oldScriptRegex, newScript);
fs.writeFileSync(path, content);
