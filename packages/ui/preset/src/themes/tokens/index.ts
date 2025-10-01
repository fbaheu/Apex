import { defineTokens } from '@pandacss/dev';

import { blurs } from '~themes/tokens/blurs';
import { sizes } from '~themes/tokens/sizes';
import { radii } from '~themes/tokens/radii';
import { zIndex } from '~themes/tokens/z-index';
import { opacity } from '~themes/tokens/opacity';
import { spacing } from '~themes/tokens/spacing';

import { easings } from '~themes/tokens/easings';
import { durations } from '~themes/tokens/durations';

import { sageTokensColor } from '~colors/sage';
import { baseColors } from '~themes/tokens/base-colors';

import { fonts, fontSizes, fontWeights, lineHeights, letterSpacings } from '~themes/tokens/typography';

export const tokens = defineTokens({
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,

  blurs,
  sizes,
  radii,
  zIndex,
  spacing,
  opacity,

  easings,
  durations,

  colors: {
    ...baseColors,
    neutral: sageTokensColor,
  }
});
