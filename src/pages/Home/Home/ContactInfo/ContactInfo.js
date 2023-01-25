import React from 'react';
import { useForm } from 'react-hook-form';
import './Contactinfo.css';

export const ContactInfo = () => {
    const InputClass = `form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
    `
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

    };
    return (
        <div className='contactinfo w-full mt-20 rounded-md'>
            <div className=' text-center pt-20'>
                <p className=' text-teal-600'>Contact Us</p>
                <h1 className=' text-white text-2xl'>Stay Connected With Us</h1>
            </div>
            <div className=' flex justify-center items-center'>
                <div className='block p-6 rounded-lg shadow-lg max-w-md'>
                    <form className='form-group space-y-10' onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input required placeholder='Email' className={InputClass} type='email' {...register("email", { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })} />
                        </div>
                        <div>
                            <input required placeholder='Subject' className={InputClass} type='email' {...register("subject")} />
                        </div>
                        <div>
                            <textarea required placeholder='Your Messege' className={InputClass} type='email' {...register("email", { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })} />
                        </div>
                        <div>
                            <button className=' w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
