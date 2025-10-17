import { defineTokens } from '@pandacss/dev';

import { blurs } from '~themes/tokens/blurs';
import { sizes } from '~themes/tokens/sizes';
import { radii } from '~themes/tokens/radii';
import { zIndex } from '~themes/tokens/z-index';
import { opacity } from '~themes/tokens/opacity';
import { spacing } from '~themes/tokens/spacing';

import { easings, durations, animations } from '~themes/tokens/animation';

import { neutralTokensColor } from '~colors/neutral';
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
  animations,

  colors: {
    ...baseColors,
    neutral: neutralTokensColor,
  }
});
