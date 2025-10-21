import React from 'react';
import { FavouriteIcon } from '@hugeicons/core-free-icons';
import { createFileRoute, Outlet } from '@tanstack/react-router';

import { Icon } from '@apex/react/icon';
import { Box, Grid } from '@apex/design-system/jsx';
import { Span } from '@apex/react/styled-semantic-tag';
import { isDocumentId, STATIC_CATEGORY } from '@apex/core/collections';

import { CreateNoteButton, NotesListView } from '~ui/features/note-view';
import { redirectToCategory } from '~ui/utils/navigation';

export const Route = createFileRoute('/$categoryId')({
  params: {
    parse({ categoryId }) {
      switch (true) {
        case categoryId === STATIC_CATEGORY.ALL_NOTES:
        case categoryId === STATIC_CATEGORY.FAVORITES:
        case categoryId === STATIC_CATEGORY.TRASH:
        case isDocumentId(categoryId):
          return { categoryId };
        default:
          throw Error(`"${categoryId}" is not a valid static or created category identifier.`);
      }
    }
  },
  onError(error) {
    if (error?.routerCode === 'PARSE_PARAMS') {
      throw redirectToCategory(STATIC_CATEGORY.ALL_NOTES);
    }
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
            overflow="hidden"
            borderRightWidth="1px"
            borderRightStyle="solid"
            borderRightColor="border.subtle"
            gridTemplateRows="min-content 1fr"
          >
            <Span
              py="3"
              pr="3"
              pl="5"
              gap="2.5"
              alignItems="center"
              display="inline-flex"
              color="text.secondary"
              fontWeight="medium"
              borderBottomWidth="1px"
              borderBottomStyle="solid"
              justifyContent="space-between"
              borderBottomColor="border.subtle"
            >
              <Span
                flex="1"
                gap="2.5"
                display="inline-flex"
                color="text.placeholder"
              >
                <Icon
                  size="md"
                  icon={FavouriteIcon}
                />
                <Span
                  textStyle="subtitle"
                  color="text.secondary"
                >
                  Favorites
                </Span>
              </Span>

              <CreateNoteButton />
            </Span>
            <NotesListView />
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
