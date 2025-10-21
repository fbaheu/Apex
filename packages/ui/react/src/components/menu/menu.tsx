import { styled, VStack } from '@apex/design-system/jsx';

/**
 * [COMPONENT] Menu
 * @description Define a menu component to encapsulate multiple elements.
 * @example
 * <caption>Example usage of **Menu** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => { *
 *  return (
 *    <Menu>
 *      ...
 *    </Menu>
 *  );
 * };
 * ```
 *
 */
export const Menu = styled(VStack, {
  base: {
    columnGap: '1',
    rowGap: '1',
    alignItems: 'start',
    justifyContent: 'start'
  },
});
