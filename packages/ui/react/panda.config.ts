import { defineConfig } from '@pandacss/dev';
import { createPreset } from '@apex/preset-ui';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: [createPreset()],

  // Where to look for css declarations
  include: [
    './src/**/*.{ts,tsx}',
  ],

  // Files to exclude
  exclude: ['node_modules'],

  // Import mapping
  importMap: '@apex/design-system',

  // The JSX framework to use
  jsxFramework: 'react',

  // The output directory for your css system (monorepo config)
  outdir: '../design-system',
});
