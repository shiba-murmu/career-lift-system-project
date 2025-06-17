import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../Auth/isAuthenticate';
const ProtectedData = ({children}) => {
    return isAuthenticated() ? children : <Navigate to="/login" />
};
export default ProtectedData;