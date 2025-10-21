import { styled, VStack } from '@apex/design-system/jsx';

/**
 * [COMPONENT] Menu - Item
 * @description Define a menu item element.
 * @example
 * <caption>Example usage of **MenuItem** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => { *
 *  return (
 *    <Menu>
 *      <MenuItem>
 *        ...
 *      </MenuItem>
 *    </Menu>
 *  );
 * };
 * ```
 *
 */
export const MenuItem = styled('div' as const, {
  base: {
    px: '2',
    gap: '3',
    py: '2.5',
    w: 'full',
    borderRadius: 'md',
    alignItems: 'center',
    fontWeight: 'normal',
    flexDirection: 'row',
    color: 'text.tertiary',
    display: 'inline-flex',
    justifyContent: 'start',
    willChange: 'transform',
    transitionDuration: 'normal',
    transitionProperty: 'color, transform',
    transitionTimingFunction: 'default',

    _hover: {
      bgColor: 'bg.subtle',
    },

    _active: {
      transform: 'scale(0.97)',
    },

    '&[data-link-active]': {
      bgColor: 'bg.subtle',
      color: 'text',
    }
  },
});
