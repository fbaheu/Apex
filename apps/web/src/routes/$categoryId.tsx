import React from 'react';
import { FavouriteIcon } from '@hugeicons/core-free-icons';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

import { Box, Grid } from '@apex/design-system/jsx';
import { isDocumentId } from '@apex/core/collections';
import { Span } from '@apex/react/styled-semantic-tag';
import { Icon } from '@apex/react/icon';

export const Route = createFileRoute('/$categoryId')({
  params: {
    parse({ categoryId }) {
      switch (true) {
        case categoryId === 'all-notes':
        case categoryId === 'favorites':
        case categoryId === 'trash':
        case isDocumentId(categoryId):
          return { categoryId };
        default:
          throw Error(`"${categoryId}" is not a valid static or created category identifier.`);
      }
    }
  },
  onError(error) {
    if (error?.routerCode === 'PARSE_PARAMS')
      throw redirect({ to: '/$categoryId', params: { categoryId: 'all-notes' } });
  },
  component() {
    return (
      <React.Fragment>
        <Grid
          h="full"
          w="full"
          gridTemplateColumns="min-content 1fr"
        >
          <Grid
            h="full"
            w="272px" // TO CHANGE
            borderRightWidth="1px"
            borderRightStyle="solid"
            borderRightColor="border.subtle"
            gridTemplateRows="min-content 1fr"
          >
            <Span
              py="5"
              px="5"
              gap="2.5"
              alignItems="center"
              display="inline-flex"
              textStyle="paragraph-lg"
              color="text.secondary"
              fontWeight="medium"
              borderBottomWidth="1px"
              borderBottomStyle="solid"
              borderBottomColor="border.subtle"
            >
              <Span color="text.placeholder">
                <Icon
                  size="md"
                  icon={FavouriteIcon}
                />
              </Span>

              Favorites
            </Span>
            <Span>Notes</Span>
          </Grid>
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
});
