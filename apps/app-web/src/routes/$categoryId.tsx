import React from 'react';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

import { Box, Grid } from '@apex/design-system/jsx';
import { isDocumentId } from '@apex/core/collections';

export const Route = createFileRoute('/$categoryId')({
  component: RouteComponent,
  onError: (error) => {
    if (error?.routerCode === 'PARSE_PARAMS')
      throw redirect({ to: '/$categoryId', params: { categoryId: 'all-notes' } });
  },
  params: {
    parse({ categoryId }) {
      switch (true) {
        case categoryId === 'all-notes':
        case categoryId === 'favorites':
        case isDocumentId({ categoryId }):
          return { categoryId };
        default:
          throw Error(`"${categoryId}" is not a valid static or created category name.`);
      }
    }
  }
});

function RouteComponent() {
  return (
    <React.Fragment>
      <Grid
        h="full"
        w="full"
        gridTemplateColumns="min-content 1fr"
      >
        <span>current category</span>
        <Box
          h="full"
          w="full"
        >
          <Outlet />
        </Box>
      </Grid>
    </React.Fragment>
  );
}
