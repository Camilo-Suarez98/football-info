import './index.css';
import App from './App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FecthProvider } from './Context/FetchContext.tsx';
import { RouterProvider, createRouter } from '@tanstack/react-router';;
import { routeTree } from './routeTree.gen.ts';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FecthProvider>
      <RouterProvider router={router} />
    </FecthProvider>
  </StrictMode>,
);
