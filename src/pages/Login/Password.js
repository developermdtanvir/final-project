import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';
import { SocialLogin } from './SocialLogin';

export const Password = () => {
    const { register, handleSubmit } = useForm();
    const { signInUserEmailPassword } = useContext(AuthProvider)
    const onSubmit = data => {
        const { email, password } = data;
        signInUserEmailPassword(email, password)
            .then(res => console.log(res))
    };

    const InputClass = `form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none

    `

    return (
        <div className=' flex justify-center items-center'>
            <div className='block p-6 rounded-lg shadow-lg bg-white max-w-md'>
                <form className='form-group space-y-10' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className='form-label inline-block mb-2 text-gray-700'>Email Address</label>
                        <input required placeholder='Email' className={InputClass} type='email' {...register("email", { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })} />
                    </div>
                    <div>
                        <label className=' from-label inline-block mb-2 text-gray-700'> Password</label>
                        <input required placeholder='Password' className={InputClass} type='password' {...register("password", { pattern: /^[a-zA-Z0-9*]{6,16}$/ })} />
                    </div>
                    <input className=' px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer' value='SIGN IN' type="submit" />
                    <p class="text-gray-800 mt-6 text-center">Not a member? <Link to='/register'
                        class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</Link>
                    </p>
                </form>
                <p className='text-gray-800 mt-6 text-center'>or</p>
                <SocialLogin />
            </div>
        </div>
    )
}
