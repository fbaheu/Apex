import React from 'react';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { Box, Grid } from '@apex/design-system/jsx';

import { NavigationSidebar } from '~ui/features/navigation-sidebar';

/**
 * [DECLARATION] Route
 * @description Define the __root layout for the application
 */
export const Route = createRootRoute({
  component: RootLayout,
});

/**
 * [LAYOUT] RootLayout
 * @description Define the Apex root layout.
 * @example
 * <caption>Not needed.</caption>
 */
function RootLayout() {
  return (
    <React.Fragment>
      <Grid
        gap="0"
        h="full"
        w="full"
        bgColor="bg.canvas"
        gridTemplateColumns="min-content 1fr"
      >
        <NavigationSidebar>
          <NavigationSidebar.Header />
          <NavigationSidebar.Menu />
        </NavigationSidebar>
        <Box
          p="2"
          h="full"
          w="full"
        >
          <Box
            h="full"
            w="full"
            shadow="xs"
            borderWidth="1px"
            borderRadius="lg"
            borderStyle="solid"
            bgColor="bg.default"
            borderColor="border.default"
          >
            <Outlet />
          </Box>
        </Box>
      </Grid>
      <TanStackRouterDevtools position="bottom-right" />
    </React.Fragment>
  );
}
