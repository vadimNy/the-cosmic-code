/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./*.html",
    "./stitch_the_cosmic_code_portal/**/*.html"
  ],
  theme: {
    extend: {
      "colors": {
        "secondary-fixed-dim": "#e9c400",
        "error": "#ffb4ab",
        "inverse-surface": "#e1e2eb",
        "background": "#10131a",
        "on-primary": "#420089",
        "on-primary-container": "#3a0079",
        "on-secondary-fixed-variant": "#544600",
        "outline-variant": "#4b4454",
        "surface-bright": "#363940",
        "on-surface": "#e1e2eb",
        "surface-variant": "#32353c",
        "tertiary-fixed-dim": "#00dbe9",
        "surface-container-high": "#272a31",
        "inverse-primary": "#7832d9",
        "on-secondary-fixed": "#221b00",
        "tertiary": "#00dbe9",
        "surface-container-highest": "#32353c",
        "surface-tint": "#d6baff",
        "primary-fixed": "#ecdcff",
        "on-surface-variant": "#cdc2d7",
        "surface-container-lowest": "#0b0e14",
        "inverse-on-surface": "#2e3037",
        "primary-container": "#aa73ff",
        "surface": "#10131a",
        "on-tertiary-fixed": "#002022",
        "on-tertiary": "#00363a",
        "on-tertiary-container": "#002f33",
        "on-secondary": "#3a3000",
        "on-error-container": "#ffdad6",
        "surface-dim": "#10131a",
        "on-background": "#e1e2eb",
        "primary-fixed-dim": "#d6baff",
        "on-error": "#690005",
        "on-secondary-container": "#725f00",
        "surface-container": "#1d2026",
        "error-container": "#93000a",
        "primary": "#d6baff",
        "on-primary-fixed": "#280057",
        "secondary": "#fff9ef",
        "surface-container-low": "#191c22",
        "on-primary-fixed-variant": "#5f00c0",
        "tertiary-container": "#00a0aa",
        "secondary-fixed": "#ffe16d",
        "tertiary-fixed": "#7df4ff",
        "on-tertiary-fixed-variant": "#004f54",
        "outline": "#968da0"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "gutter": "24px",
        "max-width": "1440px",
        "unit": "8px",
        "margin-mobile": "16px",
        "margin-desktop": "64px"
      },
      "fontFamily": {
        "headline-md": ["Bodoni Moda"],
        "headline-display": ["Bodoni Moda"],
        "body-md": ["Hanken Grotesk"],
        "headline-lg": ["Bodoni Moda"],
        "body-lg": ["Hanken Grotesk"],
        "label-sm": ["JetBrains Mono"],
        "headline-lg-mobile": ["Bodoni Moda"]
      },
      "fontSize": {
        "headline-md": ["28px", { "lineHeight": "1.3", "fontWeight": "500" }],
        "headline-display": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "headline-lg": ["40px", { "lineHeight": "1.2", "fontWeight": "600" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "label-sm": ["12px", { "lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "500" }],
        "headline-lg-mobile": ["32px", { "lineHeight": "1.2", "fontWeight": "600" }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
