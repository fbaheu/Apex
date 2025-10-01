import { defineSemanticTokens } from '@pandacss/dev';

export const colors = defineSemanticTokens.colors({
  bg: {
    DEFAULT: { value: '{colors.white}' },
    canvas: { value: '{colors.neutral.25}' },
    default: { value: '{colors.white}' },
    subtle: { value: '{colors.neutral.50}' },
    muted: { value: '{colors.neutral.100}' },
    emphasized: { value: '{colors.neutral.150}' },
    disabled: { value: '{colors.neutral.200}' },
  },

  fg: {
    DEFAULT: { value: '{colors.fg.default}' },
    default: { value: '{colors.neutral.900}' },
    muted: { value: '{colors.neutral.800}' },
    subtle: { value: '{colors.neutral.700}' },
    disabled: { value: '{colors.neutral.600}' },
    placeholder: { value: '{colors.neutral.500}' },
    // error: { value: { _light: '{colors.red.9}', _dark: '{colors.red.9}' } },
  },

  text: {
    DEFAULT: { value: '{colors.text.default}' },
    default: { value: '{colors.fg}' },
    secondary: { value: '{colors.fg.muted}' },
    tertiary: { value: '{colors.fg.subtle}' },
    disabled: { value: '{colors.fg.disabled}' },
    placeholder: { value: '{colors.fg.placeholder}' },
  },

  border: {
    DEFAULT: { value: '{colors.border.default}' },
    default: { value: '{colors.neutral.400}' },
    muted: { value: '{colors.neutral.300}' },
    subtle: { value: '{colors.neutral.200}' },
    disabled: { value: '{colors.neutral.150}' },
    // outline: { value: { _light: '{colors.neutral.a9}', _dark: '{colors.neutral.a9}' } },
    // error: { value: { _light: '{colors.red.9}', _dark: '{colors.red.9}' } },
  },
});
