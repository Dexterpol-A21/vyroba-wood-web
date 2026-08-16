/**
 * 🔐 FUENTE ÚNICA DE VERDAD — Información de Contacto de Vyroba Wood
 *
 * Cualquier cambio en datos de contacto debe hacerse AQUÍ.
 * Footer, Header, Layout y páginas consumen desde este archivo.
 *
 * Última actualización: 2026-08-15
 */

// ─── CORREO ───────────────────────────────────────────────────────────
export const EMAIL = "info@vyroba.com.mx"

// ─── TELÉFONO / WHATSAPP OFICIAL ──────────────────────────────────────
// +52 1 55 3645 1199 — canal principal de contacto y cotización
export const PHONE = {
  /** Formato legible para mostrar en pantalla */
  display: "+52 1 55 3645 1199",
  /** Formato para enlaces tel: (sin espacios) */
  telLink: "+5215536451199",
  /** Formato para enlaces WhatsApp (sin + ni espacios) */
  waLink: "5215536451199",
  /** URL completa de WhatsApp */
  waUrl: "https://wa.me/5215536451199",
  /** WhatsApp con mensaje de cotización prellenado */
  waQuoteUrl:
    "https://wa.me/5215536451199?text=Hola%20Vyroba%20Wood%2C%20quiero%20cotizar%20un%20proyecto.",
}

// ─── DIRECCIÓN ────────────────────────────────────────────────────────
export const ADDRESS = {
  line1: "Valle del Sonora 50",
  line2: "Edo.Méx.",
}

// ─── REDES SOCIALES ───────────────────────────────────────────────────
export const SOCIAL = {
  facebook: {
    label: "Facebook",
    url: "https://www.facebook.com/VyrobaComunicacionCreativa?mibextid=LQQJ4d",
  },
  instagram: {
    label: "Instagram",
    url: "https://www.instagram.com/agenciavyroba?igsh=NTF0anowNnBoemY5",
  },
  linkedin: {
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/vyrobacomunicacioncreativa",
  },
} as const

// ─── NOMBRE LEGAL ─────────────────────────────────────────────────────
export const BRAND = {
  name: "Vyroba Wood",
  tagline: "MOBILIARIO A MEDIDA",
  subtitle: "Planta de Manufactura en Madera",
  year: 2026,
}
