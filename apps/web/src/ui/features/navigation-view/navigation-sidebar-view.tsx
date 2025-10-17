import React from 'react';

import { Aside } from '@apex/react/styled-semantic-tag';

/**
 * [COMPONENT] NavigationSidebarView
 * @description Define the layout where all sidebar items are placed under the same grid.
 * @example
 * <caption>Example usage of **NavigationSidebarView** component.</caption>
 *
 * ```typescript tsx
 * const MyComponent = () => {
 *  return (
 *    <NavigationSidebarView>
 *      ...
 *    </NavigationSidebarView>
 *  );
 * };
 * ```
 *
 */
export const NavigationSidebarView: React.FunctionComponent<Readonly<React.PropsWithChildren>> = ({ children }) => {
  return (
    <Aside
      w="256px" // TO CHANGE
      gap="6"
      display="grid"
      gridTemplateRows="repeat(2, min-content) 1fr"
    >
      {children}
    </Aside>
  );
};
