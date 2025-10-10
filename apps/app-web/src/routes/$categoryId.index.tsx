import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

import { NoteEditor } from '~ui/features/editor-view';

export const Route = createFileRoute('/$categoryId/')({
  component: RouteComponent,
});

// PUT AN EMPTY EDITOR HERE

function RouteComponent() {
  return <NoteEditor />;
}
