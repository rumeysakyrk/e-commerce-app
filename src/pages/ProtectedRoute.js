import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext"
import Profile from './Profile';

function ProtectedRoute() {
  const { loggedIn } = useAuth();
  if (loggedIn) {
    return <Profile />;
  }
  return <Navigate to={"/"} />;
}

export default ProtectedRoute
