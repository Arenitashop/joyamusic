---
name: Aetheric
colors:
  surface: '#181021'
  surface-dim: '#181021'
  surface-bright: '#3f3548'
  surface-container-lowest: '#120b1b'
  surface-container-low: '#201829'
  surface-container: '#241c2e'
  surface-container-high: '#2f2638'
  surface-container-highest: '#3a3144'
  on-surface: '#ecddf6'
  on-surface-variant: '#c4c5d9'
  inverse-surface: '#ecddf6'
  inverse-on-surface: '#362d3f'
  outline: '#8e90a2'
  outline-variant: '#434656'
  surface-tint: '#b8c3ff'
  primary: '#b8c3ff'
  on-primary: '#002387'
  primary-container: '#2d5bff'
  on-primary-container: '#efefff'
  inverse-primary: '#104af0'
  secondary: '#d3beeb'
  on-secondary: '#38294d'
  secondary-container: '#524267'
  on-secondary-container: '#c4b0dd'
  tertiary: '#d2bbff'
  on-tertiary: '#3f008e'
  tertiary-container: '#8342f4'
  on-tertiary-container: '#f6ecff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001355'
  on-primary-fixed-variant: '#0035bd'
  secondary-fixed: '#eddcff'
  secondary-fixed-dim: '#d3beeb'
  on-secondary-fixed: '#231437'
  on-secondary-fixed-variant: '#4f4065'
  tertiary-fixed: '#eaddff'
  tertiary-fixed-dim: '#d2bbff'
  on-tertiary-fixed: '#25005a'
  on-tertiary-fixed-variant: '#5a00c6'
  background: '#181021'
  on-background: '#ecddf6'
  surface-variant: '#3a3144'
typography:
  headline-xl:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Be Vietnam Pro
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  margin-mobile: 20px
  gutter: 16px
---

## Brand & Style

This design system is built for a premium, immersive music streaming experience. The brand personality is sophisticated, nocturnal, and rhythmic. It targets an audience that values high-fidelity aesthetics as much as high-fidelity audio. 

The visual style is a blend of **Minimalism** and **Glassmorphism**. By using deep purples and high-radius curves, the interface feels organic and fluid. The "simple blue circle" brand element acts as a rhythmic anchor throughout the UI—representing a pulse, a playhead, or a focal point. The overall emotional response should be one of calm, focused immersion, where the interface recedes to let the album art and music take center stage.

## Colors

The palette is anchored in the "Deep Purple" spectrum, utilizing a near-black neutral for the base canvas to ensure true depth. 

- **Primary:** A vibrant, electric blue (#2D5BFF) used exclusively for the signature circle element and critical action states.
- **Secondary/Tertiary:** Layers of rich purples used for subtle gradients and surface definitions.
- **Backgrounds:** Use the `surface-deep` gradient for main view backgrounds to prevent a "flat" black look. 
- **Overlays:** Use low-opacity tints of the tertiary purple to create a sense of atmospheric haze rather than grey shadows.

## Typography

**Be Vietnam Pro** is selected for its contemporary, clean proportions and friendly yet professional geometry. 

In this design system, typography follows a strict hierarchy to ensure readability against dark, vibrant backgrounds. Headlines use tighter letter spacing and heavier weights to feel "locked in." Body text utilizes a slightly lighter opacity (60-80%) to maintain visual hierarchy without sacrificing legibility. Label styles are used for track durations and metadata, often employing all-caps for a sleek, editorial feel.

## Layout & Spacing

This design system utilizes a **fluid grid** with generous safe-area margins. 

The layout relies on a vertical rhythm based on 4px increments. For mobile streaming, content is primarily centered or aligned to a 20px side margin. Horizontal scrolling "carousels" for albums should have their leading edge aligned with the margin but bleed off the screen trailing edge to signal more content. Navigation elements are docked to the bottom with a height of 88px (including safe area) to ensure thumb-reachability.

## Elevation & Depth

Depth is achieved through **Tonal Layers** and **Ambient Shadows**. Because the theme is dark purple, traditional black shadows are replaced with deep indigo/purple shadows (#050208 at 40% opacity) with a large blur radius (20px-40px).

- **Level 1 (Base):** Deepest purple background.
- **Level 2 (Cards):** Slightly lighter purple or semi-transparent glass (10% white overlay) with a backdrop blur of 20px.
- **Level 3 (Floating Elements):** The blue primary circle and active playback controls, featuring a subtle "outer glow" rather than a drop shadow to simulate light emission.

## Shapes

The shape language is defined by high-radius, "squircle-like" curves. 

Standard song and album cards use `rounded-lg` (16px) to feel soft and touchable. Buttons and search bars use `rounded-xl` (24px) or full pill-shapes. The signature "Blue Circle" remains a perfect 1:1 aspect ratio circle at all times. Avoid sharp corners entirely to maintain the premium, fluid aesthetic of the design system.

## Components

- **Song Cards:** These feature high-resolution album art with a `rounded-lg` radius. Text metadata is stacked vertically beneath or to the right, using `headline-md` for titles and `body-sm` for artists.
- **Primary Action (Play):** Represented by a 56px or 64px blue circle. The play icon should be centered, white, and use a heavy weight.
- **Navigation Bar:** A sleek, glassmorphic bar at the bottom with a 24px backdrop blur. Icons are minimal line-art, with the active state indicated by a small blue dot beneath the icon.
- **Chips:** Used for genre selection, these should have a thin (1px) purple border and a pill-shape. Active chips fill with a subtle purple gradient.
- **Progress Bar:** The track progress bar should be thin (4px), using a secondary purple for the track and the primary blue for the progress, ending in a small circular "thumb."
- **Glass Overlays:** Modal sheets for "Now Playing" should slide from the bottom, using a heavy backdrop blur to keep the background context visible but out of focus.