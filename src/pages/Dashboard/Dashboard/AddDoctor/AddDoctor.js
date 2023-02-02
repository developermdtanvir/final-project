import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Speainer } from '../../../shared/Speainer/Speainer';

export const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);
    const handleAddDoctor = data => {
        const { email, password, name, specify } = data;

        const image = data.img[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = ` https://api.imgur.com/`
        fetch(url, {
            method: 'POST',
            headers: {
                Authorization: "Client-ID d9350bab70bac9f"
            },
            body: formData
        }).then(res => console.log(res))
            .then(data => console.log(data));
        const doctors = {
            name,
            email,
            specify,
            img: image
        }
        axios.post('http://localhost:5000/doctors', doctors).then(res => {
            if (res.data.acknowledged) {
                toast.success('Doctors Added successfully');
                navigate('/dashboard/managedoctors')
            }
        })

    };
    const { data, isLoading } = useQuery({
        queryKey: ['appoinmentSpecality'],
        queryFn: () => axios.get('http://localhost:5000/appoinmentSpecality')
    });
    if (isLoading) {
        return <Speainer></Speainer>
    }
    const InputClass = `form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
    `
    return (
        <div className=' flex justify-start p-10 items-center'>
            <div className='block p-6 rounded-lg shadow-lg bg-white max-w-md'>
                <form className='form-group space-y-10' onSubmit={handleSubmit(handleAddDoctor)}>
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
                        <label className='form-label inline-block mb-2 text-gray-700'>Specality</label>
                        <select {...register('specify')} className="select w-full ">
                            {
                                data.data.map(name => <option value={name.name} key={name._id}>{name.name}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <div className="max-w-xl">
                            <label
                                className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                                <span className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <span className="font-medium text-gray-600">
                                        Drop files to Attach, or
                                        <span className="text-blue-600 underline">browse</span>
                                    </span>
                                </span>
                                <input type="file" name="file_upload" {...register('img', { required: 'Photo is Requird' })} className="hidden" />
                            </label>
                            {
                                errors.img && <p className=' text-red-600 text-center'>{errors.img.message}</p>
                            }
                        </div>
                    </div>
                    <input className=' w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer' value='Add' type="submit" />
                </form>
            </div>
        </div>
    )
}
