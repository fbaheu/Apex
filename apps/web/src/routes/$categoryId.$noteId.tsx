import { createFileRoute, redirect } from '@tanstack/react-router';

import { isDocumentId } from '@apex/core/collections';
import { globalDispatcher } from '@apex/dispatcher';

import { Note } from '~ui/features/editor-view';

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
      return result.at(1);
    }
  },
  onError(error) {
    if (error?.routerCode === 'PARSE_PARAMS')
      throw redirect({ to: '/$categoryId', params: { categoryId: 'all-notes' } });
  },
  component() {
    const note = Route.useLoaderData();

    return <Note />;
  },
});
