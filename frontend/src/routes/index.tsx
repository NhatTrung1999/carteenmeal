import MainLayout from '@/layouts/MainLayout';
import { createBrowserRouter, Outlet } from 'react-router';

export const router = createBrowserRouter([
  //   { path: '/', Component: () => <h1>Home</h1> },
  {
    path: '/',
    Component: () => <MainLayout children={<Outlet />} />,
    children: [
      { path: '/', Component: () => <h1>Main Home</h1> },
      { path: '/test', Component: () => <h1>Test</h1> },
    ],
  },
  { path: '/login', Component: () => <h1>Login</h1> },
  { path: '/permission', Component: () => <h1>Permission</h1> },
  { path: '/logger', Component: () => <h1>Logger</h1> },
]);
