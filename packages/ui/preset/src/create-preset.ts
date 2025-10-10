import { definePreset } from '@pandacss/dev';

import { globalCss } from '~themes/global-css';
import { textStyles } from '~themes/text-styles';
import { breakpoints } from '~themes/breakpoints';

import { tokens } from '~themes/tokens';
import { semanticTokens } from '~themes/semantic-tokens';

export function createPreset() {
  return definePreset({
    name: '@apex/preset-ui',

    globalCss,

    conditions: {
      open: '&:is([open], [data-open], [data-state="open"], [data-popup-open], :popover-open)',
    },

    theme: {
      extend: {
        breakpoints,

        textStyles,

        tokens,

        semanticTokens,
      }
    }
  });
}
