import React from 'react';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { Box, Grid } from '@apex/design-system/jsx';

import { appStore } from '~ui/stores/app-store';
import { NavigationSidebar } from '~ui/features/navigation-view';

export const Route = createRootRoute({
  loader() {
    return appStore.getState().init();
  },
  component() {
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
            <NavigationSidebar.Categories />
          </NavigationSidebar>
          <Box
            py="2"
            h="full"
            w="full"
          >
            <Box
              h="full"
              w="full"
              shadow="xs"
              bgColor="bg"
              borderWidth="1px"
              borderRadius="xl"
              borderStyle="solid"
              borderColor="border.subtle"
            >
              <Outlet />
            </Box>
          </Box>
        </Grid>
        <TanStackRouterDevtools position="bottom-right" />
      </React.Fragment>
    );
  },
});
