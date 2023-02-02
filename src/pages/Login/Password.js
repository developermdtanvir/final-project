import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';
import useToken from '../../hooks/useToken';
import { SocialLogin } from './SocialLogin';

export const Password = () => {
    const { signInUserEmailPassword } = useContext(AuthProvider);
    const [token] = useToken(currentUserEmail)
    console.log(currentUserEmail);
    const navigate = useNavigate()
    if (token) {
        navigate('/')
    }




    return (
       
    )
}
