import { createFileRoute } from '@tanstack/react-router';

import { globalDispatcher } from '@apex/dispatcher';
import { isDocumentId, STATIC_CATEGORY } from '@apex/core/collections';

import { Note } from '~ui/features/editor-view';
import { redirectToCategory } from '~ui/utils/navigation';
import { Box } from '@apex/design-system/jsx';

export const Route = createFileRoute('/$categoryId/$noteId')({
  params: {
    parse({ noteId }) {
      if (isDocumentId(noteId)) {
        return { noteId };
      }

      throw Error(`"${noteId}" is not a valid note id.`);
    }
  },
  async loader({ params }) {
    const { noteId } = params;

    const result = await globalDispatcher.dispatch('fetch-note-detail', noteId);

    if (result.isSuccess()) {
      return result.unwrap();
    }
  },
  onError(error) {
    if (error?.routerCode === 'PARSE_PARAMS') {
      throw redirectToCategory(STATIC_CATEGORY.ALL_NOTES);
    }
  },
  component() {
    const note = Route.useLoaderData();

    return (
      <Box
        margin="0 auto"
        width="clamp(45ch, 100%, 95ch)"
      >
        <Note />
      </Box>
    );
  },
});
