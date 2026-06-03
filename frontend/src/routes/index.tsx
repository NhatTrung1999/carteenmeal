import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import LogPage from '@/pages/LogPage';
import PermissionPage from '@/pages/PermissionPage';
import { createBrowserRouter, Navigate } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'permission', Component: PermissionPage },
      { path: 'logger', Component: LogPage },
    ],
  },
  { path: '/login', Component: LoginPage },
  { path: '*', Component: () => <Navigate to="/" replace /> },
]);
