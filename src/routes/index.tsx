import * as React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import UserProfile from '../components/profile/UserProfile';
import AuthPage from '../pages/AuthPage';
import HomePage from '../pages/HomePage';

export const Router = () => {
  return useRoutes([
    {
      path: '/',
      children: [
        {
          path: '',
          element: (
            <Layout>
              <HomePage />
            </Layout>
          ),
        },
        {
          path: 'profile',
          element: (
            <Layout>
              <UserProfile />
            </Layout>
          ),
        },
        {
          path: 'auth',
          element: (
            <Layout>
              <AuthPage />
            </Layout>
          ),
        },
        { path: '*', element: <Navigate to='/auth' /> },
      ],
    },
  ]);
};
