import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest }) => {
    const location = useLocation();
    const token = localStorage.getItem('token');

    if (!token) {
        // Redirect user to login page, but save the current location they were trying to go to
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;  // render children when the user is authenticated
};

export default ProtectedRoute;
