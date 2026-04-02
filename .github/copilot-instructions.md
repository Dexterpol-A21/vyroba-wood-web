# Design System: Industrial Tech-Minimalism

## 1. Overview & Creative North Star
The Creative North Star for this system is **"The Engineered Organic."**

This design system rejects the "rustic" clichés of woodworking in favor of a high-precision, architectural aesthetic. It treats the digital canvas as a drafting table where the raw, chaotic beauty of natural wood grain is conquered by the rigid, mathematical precision of engineering.

We break the "template" look through **Calculated Friction**. By clashing massive, heavy-weight typography against a visible technical grid and high-definition organic textures, we create a layout that feels built rather than designed. Expect intentional asymmetry, where blocks of content "snap" to a rigid grid, yet are interrupted by macro imagery of wood fibers that bleed off the edges of the frame.

## 2. Colors
Our palette is rooted in the materials of the workshop and the drafting office. It is cold, technical, and punctuated by the warmth of raw oak only at points of high intent.

- **Primary Background (`surface` #f9f9f9):** The "Technical Gray." This is our drafting paper.
- **The Blueprint (`primary` #162839 / `primary_container` #2c3e50):** Used for structural lines, accents, and deep-contrast blocks.
- **The Kinetic Action (`secondary` #8a501c / `secondary_container` #fdb074):** The "Oak Orange." This is reserved strictly for interaction. It represents the heat of the saw and the soul of the wood.
- **The Typography (`on_surface` #1a1c1c):** "Carbon Black." Heavy, permanent, and authoritative.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. Boundaries must be defined by **Tonal Shifts** or the **Visible Grid Background**. Use `surface_container_low` against `surface` to define regions. The only lines permitted are "Technical Grid Lines" (Blueprint Blue at 10-15% opacity) which serve as a background texture, not a container border.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked architectural plates.
- Use `surface_container_lowest` (#ffffff) for the highest priority interactive cards.
- Use `surface_dim` (#dadada) for recessed, technical sidebars.
- **Nesting:** An inner container must always be a different tier than its parent to define its physical presence.

### Signature Textures
Apply subtle gradients from `primary` to `primary_container` on large-scale CTA backgrounds. This mimics the depth of an industrial steel plate or a deep ink-wash blueprint, providing a "soul" that flat hex codes cannot achieve.

## 3. Typography
Typography is our structural steel. It must feel massive, heavy, and immovable.

- **Display & Headline (Cabinet Grotesk, Bold/Black):** Use `display-lg` (3.5rem) and `headline-lg` (2rem) to dominate the viewport. Letter spacing should be tight (-0.02em) to emphasize the "block" feel.        
- **Body (Satoshi, Regular/Medium):** `body-lg` (1rem) provides the technical manual clarity needed for descriptions, feeling organic but designed.

## 4. Elevation & Depth
In a world of "Industrial Minimalism," traditional drop shadows are too soft. We use **Tonal Layering** and **Ambient Depth**.

- **The Layering Principle:** Achieve lift by stacking `surface_container_highest` (#e2e2e2) over `surface` (#f9f9f9). The contrast *is* the elevation.
- **Ambient Shadows:** If a floating element (like a modal) is required, use a wide, diffused shadow (32px blur) at 4% opacity using a tint of `primary` (#162839). It should feel like a heavy object casting a soft shadow on a concrete floor.
- **The "Ghost Border":** If a button or input needs a container, use `outline_variant` at 20% opacity. Never use 100% opaque black borders; they break the "blueprint" sophistication.
- **Glassmorphism:** For overlays or "Blueprint" tooltips, use `surface_container` with a `backdrop-blur` of 12px and 80% opacity. This allows the underlying wood textures to "ghost" through the UI.

## 5. Components

### Buttons
- **Primary:** Rigid, 0px radius. Background: `primary` (#162839), Text: `on_primary` (#ffffff). High-contrast, no-nonsense.
- **Action/Interactive:** Background: `secondary` (#8a501c). Used only for the final "Purchase" or "Submit" to draw the eye like a safety switch.
- **States:** On hover, shift from `primary` to `primary_container`. No "bounce" animations; use a linear, 150ms "snap" transition.

### Input Fields
- **Style:** Underline only (using `outline` #74777d) or solid `surface_container` blocks.
- **Radius:** Strictly 0px.
- **Focus:** Transition the underline to `secondary` (Oak Orange) to signal active "engineering" of data.

### Cards & Lists
- **The Divider Rule:** Forbid 1px horizontal dividers. Use vertical white space (Spacing `8` or `10`) to separate list items.
- **Card Styling:** A card is simply a shift in background color to `surface_container_low`. It should snap exactly to the background grid lines.

### Signature Component: "The Spec Tag"
A custom component for Vyroba Wood. A small, `label-sm` text block in Space Grotesk, wrapped in a `primary` ghost border (20% opacity), used to call out wood species, moisture content, or grain type.

## 6. Do's and Don'ts

### Do
- **Do** snap all elements to a rigid 4px or 8px baseline grid.
- **Do** use high-resolution, macro photography of wood knots and grains as "structural" background elements.
- **Do** embrace 0px border-radii for everything. Precision is found in right angles.
- **Do** allow typography to be the primary visual "weight" on the page.

### Don't
- **Don't** use "Natural," "Rustic," or "Hand-drawn" icons. Icons must be geometric, stroke-based, and technical.
- **Don't** use soft, rounded corners. It erodes the industrial power of the brand.
- **Don't** use standard shadows. If it doesn't look like it was drawn on a drafting table, it doesn't belong.
- **Don't** clutter. If a line doesn't serve a structural purpose, delete it.