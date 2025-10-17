import React from 'react';

import { Link } from '@apex/react/link';
import { Icon, type IconSVGElement } from '@apex/react/icon';
import { Span } from '@apex/react/styled-semantic-tag';

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
      px="2"
      gap="3"
      py="2.5"
      w="full"
      fontWeight="normal"
      color="text.tertiary"
      borderRadius="md"
      alignItems="center"
      flexDirection="row"
      display="inline-flex"
      justifyContent="start"
      to="/$categoryId/$noteId"
      id="navigation-sidebar-menu-item"
      preload={false}
      activeProps={{ 'data-active': 'true' }}
      _hover={{
        bgColor: 'bg.subtle',
      }}
      _active={{
        bgColor: 'bg.subtle',
        color: 'text',
      }}
      params={({ noteId }) => ({ categoryId: category, noteId: noteId ?? '' })}
    >
      {({ isActive }) => (
        <React.Fragment>
          <Span color="text.placeholder">
            <Icon
              size="sm"
              icon={icon}
            />
          </Span>
          {label}
        </React.Fragment>
      )}
    </Link>
  );
};
