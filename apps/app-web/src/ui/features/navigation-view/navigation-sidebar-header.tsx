import React from 'react';

import { HStack } from '@apex/design-system/jsx';

/**
 * [COMPONENT] NavigationSidebarHeader
 * @description Define the navigation header, which display buttons to toggle sidebar and go to settings.
 * @example
 * <caption>Example usage of **NavigationSidebarHeader** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => {
 *  return (
 *    <NavigationSidebarHeader  />
 *  );
 * };
 * ```
 *
 */
export const NavigationSidebarHeader: React.FunctionComponent = () => {
  return (
    <HStack
      py="3"
      pl="3"
      pr="4"
      gap="1"
      alignItems="start"
      justifyContent="end"
      id="navigation-sidebar-header"
    >
      che !
    </HStack>
  );
};
