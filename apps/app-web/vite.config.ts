import Path from 'node:path';

import React from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

/**
 * CONSTANTS
 */
const ROOT = __dirname;

export default defineConfig({
  root: ROOT,
  plugins: [tanstackRouter({ target: 'react', autoCodeSplitting: true }), React()],
  publicDir: './src/assets',
  envPrefix: 'APX_',
  resolve: {
    alias: [
      {
        find: /^~(.*)/,
        replacement: `${Path.resolve(ROOT, 'src')}/$1`,
      },
    ],
  }
});
