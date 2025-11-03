import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

export default function PrivateRoute({ children }) {
  const user = useAuthStore((s) => s.user);

  // while fetchCurrentUser runs, user may be null; you could add a loading state if needed
  if (!user) return <Navigate to="/signin" replace />;
  
  return children;
}