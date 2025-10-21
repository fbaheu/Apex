import { MenuItem } from './menu-item';
import { Menu as BaseMenu } from './menu';

/**
 * [COMPONENT] Menu
 * @description Define a menu component with pre defined item.
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
export const Menu = Object.assign(BaseMenu, { Item: MenuItem });
