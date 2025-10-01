import { createFileRoute } from '@tanstack/react-router';
import React from 'react';

// import { NoteEditor } from '~ui/features/note-editor';

export const Route = createFileRoute('/$categoryId/')({
  component: RouteComponent,
});

// PUT AN EMPTY EDITOR HERE

function RouteComponent() {
  return <React.Fragment />;
}
