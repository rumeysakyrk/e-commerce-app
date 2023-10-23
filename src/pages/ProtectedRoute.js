import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext"
import Profile from './Profile';
import Admin from './Admin';

function ProtectedRoute({ admin }) {
  const { loggedIn, user } = useAuth();
  if (admin) {
    if (user && user.role === 'admin') {
      return <Admin />;
    }
    else {
      return <Navigate to={"/"} />;
    }
  }
  else if (loggedIn) {
    return <Profile />;
  }
  return <Navigate to={"/"} />;
}

export default ProtectedRoute
