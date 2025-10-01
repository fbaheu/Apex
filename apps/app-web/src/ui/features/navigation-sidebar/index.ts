import { NavigationSidebarView } from './navigation-sidebar-view';
import { NavigationSidebarMenu } from './navigation-sidebar-menu';
import { NavigationSidebarHeader } from './navigation-sidebar-header';

/**
 * [COMPONENT] NavigationSidebar
 * @description Define the navigation sidebar as a composition component.
 * @example
 * <caption>Example usage of **NavigationSidebar** component.</caption>
 *
 * ```typescript jsx
 * const MyComponent = () => {
 *  return (
 *    <NavigationSidebar>
 *      <NavigationSidebar.Header />
 *      ...
 *    </NavigationSidebar>
 *  );
 * };
 * ```
 *
 */
export const NavigationSidebar = Object.assign(NavigationSidebarView, {
  Menu: NavigationSidebarMenu,
  Header: NavigationSidebarHeader,
});
