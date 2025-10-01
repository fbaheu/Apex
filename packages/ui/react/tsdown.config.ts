import { defineConfig } from 'tsdown';

export default defineConfig({
  dts: true,
  platform: 'browser',
  entry: ['./src/**/*', '!**/*.test.{js,ts,tsx}'],
  alias: {
    '~*': './src/*'
  },
});
