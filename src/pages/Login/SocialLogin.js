import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';
import useToken from '../../hooks/useToken';

export const SocialLogin = () => {
    const { googleLogin } = useContext(AuthProvider);
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate()
    const [token] = useToken(userEmail);
    if (token) {
        navigate('/')
    }
    const handleGoogleSignIn = () => {
        googleLogin()
            .then(res => {
                setUserEmail(res.user.email)
            })
    }
    return (
        <div>
            <button className=' w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' onClick={handleGoogleSignIn}>CONTINUE WITH GOOGLE</button>
        </div>
    )
}
