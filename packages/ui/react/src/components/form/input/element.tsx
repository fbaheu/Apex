import { styled } from '@apex/design-system/jsx';

/**
 * [COMPONENT] Input - Element
 * @description Define a basic html input element.
 * @example
 * <caption>Example usage of **Element** component.</caption>
 *
 * ```typescript jsx
 * const MyComponent = () => {
 *  return (
 *    <Element type="text" placeholder="Search me" />
 *  );
 * };
 * ```
 *
 */
export const Element = styled('input' as const, {
  base: {
    flex: 1,
    py: '2',
    px: '2.5',
    w: 'full',
    outline: 'none',
    minWidth: '0',
    color: 'text',
    appearance: 'none',
    WebkitAppearance: 'none',
    position: 'relative',
    background: 'transparent',
    fontFamily: 'token(fonts.display), token(fonts.mono)',

    _disabled: {
      cursor: 'not-allowed',
    },

    _placeholder: {
      color: 'text.tertiary',
      opacity: '70',
    },
  },
});
