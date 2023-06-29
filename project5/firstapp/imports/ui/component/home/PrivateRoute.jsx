// PrivateRoute.js
import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import HomePage from './HomePage';

const PrivateRoute = () => {
  const currentUser = useCurrentUser();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Route path="/" element={<Outlet />} />
      <Route path="/" element={<HomePage />} />
    </>
  );
};

export default PrivateRoute;
