import { config as baseConfig } from "./base.js";

/**
 * A custom ESLint configuration for libraries that use React.
 *
 * @type {import("eslint").Linter.Config[]} */
export const reactConfig = [
  ...baseConfig,
  {
    rules: {
      '@stylistic/jsx-max-props-per-line': [
        1,
        { maximum: 1 },
      ],
      '@stylistic/jsx-sort-props': [
        1,
        {
          callbacksLast: true,
          shorthandFirst: true,
          ignoreCase: true,
          noSortAlphabetically: true,
        },
      ],
      '@stylistic/jsx-first-prop-new-line': [1, 'multiline-multiprop'],
      '@stylistic/quote-props': [1, 'as-needed', { unnecessary: true }],
      '@stylistic/jsx-props-no-multi-spaces': 1,
    }
  }
];
