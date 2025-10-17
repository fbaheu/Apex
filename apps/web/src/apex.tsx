import React from 'react';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';

import './globals.css';

// Create a router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
});

// Register router module wide for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const Apex: React.FunctionComponent = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
