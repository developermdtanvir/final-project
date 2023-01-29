import React, { useContext } from 'react';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';
import { Password } from './Password';

export const Login = () => {
    const { user, loading } = useContext(AuthProvider);

    if (loading) {
        return <button className="btn btn-square loading"></button>
    }

    return (
        <div>
            <Password />
        </div>
    )
}
