import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { APP_MOUNTING_POINT, getVersion } from '~common/constants';

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

const rootElement = document.getElementById(APP_MOUNTING_POINT)!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  void root.render(
    <React.StrictMode>
      <RouterProvider
        key={getVersion()}
        router={router}
      />
    </React.StrictMode>,
  );
}
