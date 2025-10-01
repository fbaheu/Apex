import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/$categoryId/new')({
  component: RouteComponent,
});

// AUTOMATICALLY CREATE A NEW NOTE AND NAVIGATE TO IT WHENEVER THIS ROUTE IS REACHED

function RouteComponent() {
  return <div>Hello "/$categoryId/new"!</div>;
}
