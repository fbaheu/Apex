import { createFileRoute } from '@tanstack/react-router';

import { Note } from '~ui/features/editor-view';

export const Route = createFileRoute('/$categoryId/')({
  component() {
    return <Note />;
  }
});
