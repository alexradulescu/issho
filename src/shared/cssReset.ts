import { css } from '@emotion/react'

export const cssReset = css`
  /*
  Shamelessly inspired (stolen) Josh's Custom CSS Reset ;-) 
  https://www.joshwcomeau.com/css/custom-css-reset/
*/

  /* 
  - Allow percentage-based heights in the application 
  - Fixes text inflating when switching to mobile landscape
  */
  html,
  body {
    height: 100%;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
    line-height: calc(1em + 0.5rem);
  }

  /* 
  Fonts standardization
  - macOS 10.11-10.12 --> -apple-system
  - macOS 10.11-10.12 --> BlinkMacSystemFont
  - Windows 6+ --> "Segoe UI"
  - Android 4+ --> "Roboto"
  - Ubuntu 10.10+ --> "Ubuntu",
  - Gnome 3+ --> "Cantarell"
  - KDE Plasma 5+ --> "Noto Sans"
  - fallback --> sans-serif
  - macOS emoji --> "Apple Color Emoji"
  - Windows emoji --> "Segoe UI Emoji"
  - Windows emoji --> "Segoe UI Symbol"
  - Linux emoji --> "Noto Color Emoji"
  */

  html {
    font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Ubuntu', 'Cantarell', 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji' !important;
  }

  /* 
  - Improve text rendering 
  - All numbers equal width
  */
  body {
    -webkit-font-smoothing: antialiased;
    font-variant-numeric: tabular-nums;
  }

  /* Improve media defaults */
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  /* Remove built-in form typography styles */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Avoid text overflows */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  /* 
  - Create a root stacking context 
  - Allow percentage-based heights in react application 
*/
  #root,
  #__next,
  #app {
    isolation: isolate;
    height: 100%;
  }
`
