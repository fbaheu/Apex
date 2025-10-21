import React from 'react';

import { Link } from '@apex/react/link';
import { Icon, type IconSVGElement } from '@apex/react/icon';
import { Span } from '@apex/react/styled-semantic-tag';
import { Menu } from '@apex/react/menu';

/**
 * INTERFACE
 */
export interface NavigationSidebarMenuItemProps {
  icon: IconSVGElement;
  label: string;
  category: string;
}

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
export const NavigationSidebarMenuItem: React.FunctionComponent<Readonly<NavigationSidebarMenuItemProps>> = ({ icon, label, category }) => {
  return (
    <Link
      w="full"
      activeOptions={{ exact: true }}
      to="/$categoryId/$noteId"
      id="navigation-sidebar-menu-item"
      preload={false}
      params={({ noteId }) => ({ categoryId: category, noteId: noteId ?? '' })}
    >
      {({ isActive }) => (
        <Menu.Item {...(isActive && { 'data-link-active': 'true' })}>
          <Span color="text.placeholder">
            <Icon
              size="sm"
              icon={icon}
            />
          </Span>
          {label}
        </Menu.Item>
      )}
    </Link>
  );
};
