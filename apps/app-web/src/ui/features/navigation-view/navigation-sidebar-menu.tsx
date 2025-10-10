import React from 'react';
import { Files01Icon, FavouriteIcon, Delete02Icon } from '@hugeicons/core-free-icons';

import { For } from '@apex/react/for';
import { VStack } from '@apex/design-system/jsx';

import { NavigationSidebarMenuItem } from './navigation-sidebar-menu-item';

/**
 * CONSTANTS
 */
const STATIC_MENU_ITEMS = [
  {
    icon: Files01Icon,
    label: "All Notes",
    category: "all-notes",
  },
  {
    icon: FavouriteIcon,
    label: "Favorites",
    category: "favorites",
  },
  {
    icon: Delete02Icon,
    label: 'Trash',
    category: 'trash'
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
    <VStack
      py="2"
      px="2"
      gap="1"
      alignItems="start"
      justifyContent="start"
      id="navigation-sidebar-menu"
    >
      <For each={STATIC_MENU_ITEMS}>
        {({ icon, label, category  }) => (
          <NavigationSidebarMenuItem
            icon={icon}
            label={label}
            key={category}
            category={category}
          />
        )}
      </For>
    </VStack>
  );
};
