import { defineTokens } from '@pandacss/dev';

export const fonts = defineTokens.fonts({
  display: {
    value: '"Poppins"',
  },

  editor: {
    value: '"Poppins"',
  },

  sans: {
    value: [
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Noto Sans"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ],
  },

  mono: {
    value: [
      'ui-monospace',
      'SFMono-Regular',
      'Menlo',
      'Monaco',
      'Consolas',
      '"Liberation Mono"',
      '"Courier New"',
      'monospace',
    ],
  }
});

export const fontSizes = defineTokens.fontSizes({
  xs: { value: '0.75rem' },
  sm: { value: '0.875rem' },
  md: { value: '1rem' },
  lg: { value: '1.125rem' },
  xl: { value: '1.25rem' },
  '2xl': { value: '1.5rem' },
  '3xl': { value: '1.75rem' },
  '4xl': { value: '2.25rem' },
  '5xl': { value: '3rem' },
  '6xl': { value: '3.75rem' },
  '7xl': { value: '4.5rem' },
});

export const fontWeights = defineTokens.fontWeights({
  thin: { value: '100' },
  extralight: { value: '200' },
  light: { value: '300' },
  normal: { value: '400' },
  medium: { value: '500' },
  semibold: { value: '600' },
  bold: { value: '700' },
  extrabold: { value: '800' },
  black: { value: '900' },
});

export const letterSpacings = defineTokens.letterSpacings({
  tighter: { value: '-0.02em' },
  tight: { value: '-0.01em' },
  normal: { value: '0em' },
  wide: { value: '0.025em' },
  wider: { value: '0.05em' },
  widest: { value: '0.1em' },
});

export const lineHeights = defineTokens.lineHeights({
  xs: { value: '1.125rem' },
  sm: { value: '1.25rem' },
  md: { value: '1.5rem' },
  lg: { value: '1.75rem' },
  xl: { value: '1.75rem' },
  '2xl': { value: '2rem' },
  '3xl': { value: '2.25rem' },
  '4xl': { value: '2.75rem' },
  '5xl': { value: '3.75rem' },
  '6xl': { value: '4.5rem' },
  '7xl': { value: '5rem' },
});
