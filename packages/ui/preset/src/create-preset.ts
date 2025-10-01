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
