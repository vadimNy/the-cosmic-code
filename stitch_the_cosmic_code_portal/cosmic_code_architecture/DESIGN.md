---
name: Cosmic Code Architecture
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363940'
  surface-container-lowest: '#0b0e14'
  surface-container-low: '#191c22'
  surface-container: '#1d2026'
  surface-container-high: '#272a31'
  surface-container-highest: '#32353c'
  on-surface: '#e1e2eb'
  on-surface-variant: '#cdc2d7'
  inverse-surface: '#e1e2eb'
  inverse-on-surface: '#2e3037'
  outline: '#968da0'
  outline-variant: '#4b4454'
  surface-tint: '#d6baff'
  primary: '#d6baff'
  on-primary: '#420089'
  primary-container: '#aa73ff'
  on-primary-container: '#3a0079'
  inverse-primary: '#7832d9'
  secondary: '#fff9ef'
  on-secondary: '#3a3000'
  secondary-container: '#ffdb3c'
  on-secondary-container: '#725f00'
  tertiary: '#00dbe9'
  on-tertiary: '#00363a'
  tertiary-container: '#00a0aa'
  on-tertiary-container: '#002f33'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ecdcff'
  primary-fixed-dim: '#d6baff'
  on-primary-fixed: '#280057'
  on-primary-fixed-variant: '#5f00c0'
  secondary-fixed: '#ffe16d'
  secondary-fixed-dim: '#e9c400'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#544600'
  tertiary-fixed: '#7df4ff'
  tertiary-fixed-dim: '#00dbe9'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#10131a'
  on-background: '#e1e2eb'
  surface-variant: '#32353c'
typography:
  headline-display:
    fontFamily: Bodoni Moda
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1440px
---

## Brand & Style

This design system is built for the "Cosmic Architect"—a persona that balances the cold precision of the universe with the spiritual mystery of the unknown. The brand personality is enigmatic, authoritative, and expansive. It aims to evoke a sense of awe, as if the user is peering through a high-tech observatory at the blueprints of reality.

The visual style is a hybrid of **Glassmorphism** and **Minimalism**, layered over a deep-space canvas. It utilizes "ethereal light" (glows and blurs) to define boundaries rather than hard lines, creating a UI that feels like it is floating in a vacuum. Surfaces are treated as semi-transparent lenses that reveal hints of nebulous activity beneath, suggesting depth and hidden complexity.

## Colors

The palette is rooted in the "Abyssal Base," a range of near-blacks and deep navies that provide the infinite backdrop. 

- **Primary (Nebula Purple):** Used for primary actions and active states. It should appear to "glow" via subtle outer glows or drop shadows.
- **Secondary (Celestial Gold):** Reserved for highlights, special achievements, or "architectural" accents that denote high value or ancient wisdom.
- **Tertiary (Starlight Cyan):** A high-tech accent used for data visualizations, technical readouts, and secondary indicators.
- **Surface Tints:** Instead of grey, surfaces use translucent versions of the neutral base (e.g., 40-60% opacity) with a heavy backdrop blur to maintain legibility.

## Typography

The typographic scale creates a tension between the classic and the futuristic. 

**Headlines** use an elegant, high-contrast serif to feel like an ancient manuscript or architectural inscription. Large display type should be set with tight tracking and can occasionally use a subtle gradient from Starlight White to Nebula Purple.

**Body Text** is set in a modern, highly legible sans-serif. This provides the "high-tech" counter-balance, ensuring that dense information feels structured and clear.

**Labels and Metadata** utilize a monospaced font to evoke the "code" aspect of the brand, suggesting that the underlying data is being pulled directly from a cosmic terminal.

## Layout & Spacing

The layout follows a **Fluid Grid** philosophy, but with generous "voids" (whitespace) to reinforce the cosmic theme. Elements should not feel crowded; they need room to breathe, much like celestial bodies in space.

- **Desktop:** A 12-column grid with wide margins (64px) to center the focus. 
- **Mobile:** A 4-column grid with 16px margins. 
- **Rhythm:** An 8px linear scale is used for all internal padding and margins. Use "Super-padding" (scales of 80px or 120px) for major section breaks to create a sense of vastness.
- **Alignment:** Use asymmetrical layouts occasionally to suggest the organic nature of a nebula, while keeping functional elements (forms, lists) strictly aligned to the grid.

## Elevation & Depth

Depth is not achieved through shadows, but through **Optical Translucency**.

1.  **Level 0 (The Void):** The darkest background color, potentially with a fixed, subtle noise texture or star-field image.
2.  **Level 1 (The Veil):** Semi-transparent surfaces (rgba(255, 255, 255, 0.05)) with a 20px-32px backdrop blur.
3.  **Level 2 (The Lens):** Floating elements like cards or modals. These feature a 1px "Starlight" border (white at 15% opacity) to catch the "light" of the UI.
4.  **Level 3 (The Core):** Active buttons or focused elements that emit a Primary color glow (box-shadow: 0 0 20px rgba(157, 92, 255, 0.4)).

## Shapes

The shape language is "Soft Geometric." We avoid aggressive sharp corners to maintain a spiritual, organic feel, but we avoid full pills to keep the UI from looking too casual or "bubbly."

- **Cards/Surfaces:** Use `rounded-lg` (1rem) to feel like premium hardware or smooth cosmic glass.
- **Buttons:** Use `rounded-md` (0.5rem) for a precise, professional feel.
- **Inputs:** Match the button roundedness for consistency.
- **Interactive States:** On hover, shapes may slightly expand (1-2%) to simulate a "magnetic" pull.

## Components

### Buttons
- **Primary:** Solid Nebula Purple with white text. On hover, increase the outer glow intensity.
- **Secondary:** Transparent background with a 1px Celestial Gold border. Text is Gold.
- **Ghost:** No border or background, using Starlight Cyan for text/icons.

### Cards
Cards must use the Glassmorphism style. Background: 5% White overlay with 24px blur. Border: 1px top/left "light-leak" border (White 20%) and a bottom/right border (White 5%) to create a 3D lens effect.

### Input Fields
Inputs are dark and recessed. Use a 1px border that glows Nebula Purple only when focused. Placeholder text should be in the Monospaced font at low opacity.

### Navigation
The navigation bar should be a "Floating Dock"—a glassmorphic pill-shaped container that sits at the bottom or top of the viewport, decoupled from the screen edges.

### Progress Indicators
Use "Orbitals"—circular loaders that feature a primary color dot orbiting a central secondary color point, rather than standard linear bars.