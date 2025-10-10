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
      px="3"
      gap="4"
      py="1.5"
      w="full"
      color="text.tertiary"
      borderRadius="sm"
      alignItems="center"
      flexDirection="row"
      display="inline-flex"
      justifyContent="start"
      to="/$categoryId/$noteId"
      id="navigation-sidebar-menu-item"
      preload={false}
      activeProps={{ 'data-active': 'true' }}
      _hover={{
        bgColor: 'bg.muted',
      }}
      _active={{
        bgColor: 'bg.muted',
      }}
      params={({ noteId }) => ({ categoryId: category, noteId: noteId ?? '' })}
    >
      {({ isActive }) => (
        <React.Fragment>
          <Span color="text.tertiary">
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
