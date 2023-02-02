import React, { useContext, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthProvider } from '../../../Context/AuthContext/AuthContext'
import { Speainer } from '../../shared/Speainer/Speainer'

export const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthProvider)
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    const email = user?.email
    if (email) {
        fetch(`http://localhost:5000/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsAdmin(data.isAdmin)
                setIsAdminLoading(false)
            })
    }
    const location = useLocation()
    if (loading || isAdminLoading) {
        return <Speainer />
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
}

