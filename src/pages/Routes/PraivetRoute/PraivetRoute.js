import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthProvider } from '../../../Context/AuthContext/AuthContext'
import { Speainer } from '../../shared/Speainer/Speainer'

export const PraivetRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthProvider);
    if (loading) {
        return <Speainer />
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
}

