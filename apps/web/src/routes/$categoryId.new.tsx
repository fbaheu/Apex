import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$categoryId/new')({
  component() {
    return <div>Hello "/$categoryId/new"!</div>;
  }
});
