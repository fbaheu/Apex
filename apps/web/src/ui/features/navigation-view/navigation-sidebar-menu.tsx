import React from 'react';
import { NoteIcon, FavouriteIcon, Delete02Icon } from '@hugeicons/core-free-icons';

import { For } from '@apex/react/for';
import { Menu } from '@apex/react/menu';
import { STATIC_CATEGORY } from '@apex/core/collections/index';

import { NavigationSidebarMenuItem } from './navigation-sidebar-menu-item';

/**
 * CONSTANTS
 */
const STATIC_MENU_ITEMS = [
  {
    icon: NoteIcon,
    label: 'All Notes',
    category: STATIC_CATEGORY.ALL_NOTES,
  },
  {
    icon: FavouriteIcon,
    label: 'Favorites',
    category: STATIC_CATEGORY.FAVORITES,
  },
  {
    icon: Delete02Icon,
    label: 'Trash',
    category: STATIC_CATEGORY.TRASH
  }
];

/**
 * [COMPONENT] NavigationSidebarMenu
 * @description Define the navigation menu, which display static categories and way to navigate to them..
 * @example
 * <caption>Example usage of **NavigationSidebarMenu** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => {
 *  return (
 *    <NavigationSidebarMenu  />
 *  );
 * };
 * ```
 *
 */
export const NavigationSidebarMenu: React.FunctionComponent = () => {
  return (
    <Menu
      px="3"
      id="navigation-sidebar-menu"
    >
      <For each={STATIC_MENU_ITEMS}>
        {({ icon, label, category }) => (
          <NavigationSidebarMenuItem
            icon={icon}
            label={label}
            key={category}
            category={category}
          />
        )}
      </For>
    </Menu>
  );
};
