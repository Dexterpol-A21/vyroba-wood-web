/**
 * 🔐 FUENTE ÚNICA DE VERDAD — Información de Contacto de Vyroba Wood
 *
 * Cualquier cambio en datos de contacto debe hacerse AQUÍ.
 * Footer, Header, Layout y páginas consumen desde este archivo.
 *
 * Última actualización: 2026-07-20
 */

// ─── CORREO ───────────────────────────────────────────────────────────
export const EMAIL = "info@vyroba.com.mx"

// ─── TELÉFONO ─────────────────────────────────────────────────────────
export const PHONE = {
  /** Formato legible para mostrar en pantalla */
  display: "+52 56 2131 0456",
  /** Formato para enlaces tel: (sin espacios ni signos) */
  telLink: "+525621310456",
  /** Formato para enlaces WhatsApp (sin + ni espacios) */
  waLink: "525621310456",
  /** URL completa de WhatsApp */
  waUrl: "https://wa.me/525621310456",
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
