import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthProvider } from '../../../Context/AuthContext/AuthContext'

export const PraivetRoute = ({ children }) => {
    const location = useLocation()
    const { user } = useContext(AuthProvider)
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
}

