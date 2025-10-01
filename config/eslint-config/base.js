import TsParser from '@typescript-eslint/parser';
import Stylistic from '@stylistic/eslint-plugin';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  {
    ignores: [
      'dist',
      'node_modules',
      'coverage',
    ],
  },
  Stylistic.configs.customize({
    commaDangle: 'only-multiline',
    indent: 2,
    jsx: true,
    quoteProps: 'consistent-as-needed',
    quotes: 'single',
    semi: true,
  }),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: TsParser,
      parserOptions: {
        jsx: true,
      },
    },
  },
  {
    rules: {
      'no-console': [2]
    }
  }
];
