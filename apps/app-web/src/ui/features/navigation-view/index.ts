import { NavigationSidebarView } from './navigation-sidebar-view';
import { NavigationSidebarMenu } from './navigation-sidebar-menu';
import { NavigationSidebarHeader } from './navigation-sidebar-header';
import { NavigationSidebarCategories } from './navigation-sidebar-categories';

/**
 * [COMPONENT] NavigationSidebar
 * @description Define the navigation sidebar as a composition component.
 * @example
 * <caption>Example usage of **NavigationSidebar** component.</caption>
 *
 * ```typescript tsx
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
  Categories: NavigationSidebarCategories
});
