# Vyroba Wood

Sitio web de Vyroba Wood — fabricación de cocinas, clósets y puertas con precisión de ingeniería para el sector B2B. Fusionamos la tradición del trabajo en madera con tecnología de manufactura avanzada.

## Stack

- **Framework:** [Astro 6](https://astro.build) + [React 19](https://react.dev)
- **Estilos:** [Tailwind CSS 4](https://tailwindcss.com)
- **Animación:** [GSAP](https://gsap.com), [Framer Motion](https://motion.dev), [Lenis](https://lenis.studio)
- **Iconos:** [Lucide React](https://lucide.dev)
- **Imágenes:** sharp (optimización en build)

Requisito: Node.js >= 22.12.0

## Estructura

```text
/
├── public/
│   ├── favicon/
│   └── images/
│       ├── brand/
│       ├── kitchen/
│       ├── closet/
│       └── door/
├── src/
│   ├── components/
│   │   ├── CustomDesignBanner.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── SmoothScroll.astro
│   │   └── grids/
│   │       └── DraftingGrid.jsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro          # Home
│   │   ├── cocinas.astro        # Cocinas
│   │   ├── closets.astro        # Clósets
│   │   ├── puertas.astro        # Puertas
│   │   ├── ingenieria.astro     # Ingeniería y manufactura
│   │   ├── manifiesto.astro     # Manifiesto
│   │   ├── contacto.astro       # Contacto y cotización
│   │   ├── privacidad.astro     # Aviso de privacidad
│   │   └── terminos.astro       # Términos y condiciones
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Diseño

Estética **Brutalista Industrial** con tipografía técnica, grillas interactivas estilo plano CAD, sombras duras, y paletas de color diferenciadas por línea de producto:

| Producto  | Color primario |
|-----------|---------------|
| Cocinas   | Verde bosque (`#4A7C59`) |
| Clósets   | Azul acero (`#162839`) |
| Puertas   | Burgundy (`#8B3A36`) |
| Acento marca | Madera / cobre (`#C17A2F`) |

Fuentes: Cabinet Grotesk y Satoshi (Fontshare) + Space Grotesk (Google Fonts).

## Comandos

| Comando              | Acción                                    |
|----------------------|-------------------------------------------|
| `npm install`        | Instalar dependencias                     |
| `npm run dev`        | Servidor local en `http://localhost:4321` |
| `npm run build`      | Build de producción en `./dist/`          |
| `npm run preview`    | Previsualizar el build localmente         |
