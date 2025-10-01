import { defineTokens } from '@pandacss/dev';

import { spacing } from './spacing';

const largeSizes = {
  224: { value: '56rem' },
  256: { value: '64rem' },
  320: { value: '72rem' },
  384: { value: '80rem' },
  512: { value: '88rem' },
  640: { value: '96rem' },
  768: { value: '104rem' },
} as const;

export const sizes = defineTokens.sizes({
  ...spacing,
  ...largeSizes,

  vh: { value: '100vh' },
  vw: { value: '100vw' },
  full: { value: '100%' },
  min: { value: 'min-content' },
  max: { value: 'max-content' },
  fit: { value: 'fit-content' },
});
