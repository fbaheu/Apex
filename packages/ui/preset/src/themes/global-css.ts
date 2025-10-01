import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
  'html, body, #apex-root': {
    height: 'token(sizes.vh)',
    width: 'token(sizes.vw)',
    scrollBehavior: 'smooth',
  },

  '#apex-root': {
    textTransform: 'none',
    textDecoration: 'none',
    fontSize: 'token(fontSizes.md)',
    color: 'token(colors.text.default)',
    lineHeight: 'token(lineHeights.md)',
    letterSpacing: 'token(letterSpacings.normal)',
    fontFamily: 'token(fonts.display), token(fonts.mono)',
  },

  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
});
