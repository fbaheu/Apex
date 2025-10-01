import React from 'react';
import { createFileRoute, redirect } from '@tanstack/react-router';

import { isDocumentId } from '@apex/core/collections';

export const Route = createFileRoute('/$categoryId/$noteId')({
  component: RouteComponent,
  onError: (error) => {
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
  }
});

function RouteComponent() {
  return <div>Hello "/$categoryId/$noteId"!</div>;
}
