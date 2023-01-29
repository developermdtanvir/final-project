import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';

export const Register = () => {
    const navigate = useNavigate()
    const [success, setSuccess] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { registerEmailPassword, updateUserName } = useContext(AuthProvider);

    const onSubmit = data => {
        const { email, password } = data;

        registerEmailPassword(email, password)
            .then(res => {
                setSuccess(true);
                toast.success('User Created Successfully')
                updateUserName(data.name)
                    .then(data => {
                        console.log(data)
                        navigate('/')
                    });
            })
            .catch(error => {
                toast.error('Your Password is wrong');
                console.error(error)
            });

    };
    const InputClass = `form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`
    return (
        <div className=' flex justify-center items-center'>
            <div className='block p-6 rounded-lg shadow-lg bg-white max-w-md'>
                <form className='form-group space-y-10' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className='form-label inline-block mb-2 text-gray-700'>Name</label>
                        <input placeholder='Name' className={InputClass} type='text' {...register("name")} />
                    </div>
                    <div>
                        <label className='form-label inline-block mb-2 text-gray-700'>Email Address</label>
                        <input required placeholder='Email' className={InputClass} type='email' {...register("email", { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })} />
                        {errors.email?.type === 'pattern' && <p className=' text-red-600' role="alert">Rong Email Address</p>}
                    </div>
                    <div>
                        <label className=' from-label inline-block mb-2 text-gray-700'> Password</label>
                        <input required placeholder='Password' className={InputClass} type='password' {...register("password", { pattern: /^[a-zA-Z0-9*]{6,16}$/ })} />
                    </div>
                    <input className=' px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer' value='SIGN IN' type="submit" />
                    <p class="text-gray-800 mt-6 text-center">Are You Al Ready SignUp? <Link to='/login'
                        class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
