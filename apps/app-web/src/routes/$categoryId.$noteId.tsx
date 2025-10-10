import React from 'react';
import { createFileRoute, redirect } from '@tanstack/react-router';

import { isDocumentId } from '@apex/core/collections';
import { globalDispatcher } from '@apex/dispatcher';

export const Route = createFileRoute('/$categoryId/$noteId')({
  component: RouteComponent,
  onError(error) {
    if (error?.routerCode === 'PARSE_PARAMS')
      throw redirect({ to: '/$categoryId', params: { categoryId: 'all-notes' } });
  },
  params: {
    parse({ noteId }) {
      if (isDocumentId({ noteId })) {
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
  }
});

function RouteComponent() {
  const note = Route.useLoaderData();

  return <div>Hello "/$categoryId/$noteId"!</div>;
}
