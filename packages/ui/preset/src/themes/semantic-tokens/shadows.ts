import { defineSemanticTokens } from '@pandacss/dev';

export const shadows = defineSemanticTokens.shadows({
  xs: {
    value: '0px 1px 2px color-mix(in srgb, {colors.neutral.400}, transparent {opacity.70}), 0px 0px 1px color-mix(in srgb, {colors.neutral.400}, transparent {opacity.70})',
  },
  sm: {
    value: '0px 2px 4px color-mix(in srgb, {colors.neutral.700}, transparent {opacity.70}), 0px 0px 1px color-mix(in srgb, {colors.neutral.400}, transparent {opacity.70})'
  },
  md: {
    value: '0px 4px 8px color-mix(in srgb, {colors.neutral.700}, transparent {opacity.70}), 0px 0px 1px color-mix(in srgb, {colors.neutral.400}, transparent {opacity.70})'
  },
  lg: {
    value: '0px 8px 16px color-mix(in srgb, {colors.neutral.700}, transparent {opacity.70}), 0px 0px 1px color-mix(in srgb, {colors.neutral.400}, transparent {opacity.70})'
  },
  xl: {
    value: '0px 16px 24px color-mix(in srgb, {colors.neutral.700}, transparent {opacity.70}), 0px 0px 1px color-mix(in srgb, {colors.neutral.400}, transparent {opacity.70})'
  },
  '2xl': {
    value: '0px 24px 40px color-mix(in srgb, {colors.neutral.700}, transparent {opacity.70}), 0px 0px 1px color-mix(in srgb, {colors.neutral.400}, transparent {opacity.70})'
  },
});
