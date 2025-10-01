import { defineConfig } from 'tsdown';

export default defineConfig({
  dts: true,
  entry: ['./src/**/*', '!**/*.test.{js,ts,tsx}'],
  alias: {
    '~*': './src/*'
  },
});
