import React from 'react';
import { PraimaryButton } from '../../../../components/PraimaryButton/PraimaryButton';
import Dental from './../../../../assets/images/doctor.png';
import './MakeAppoientment.css';
export const MakeAppoientment = () => {
    return (
        <div className="hero bg-appoientment rounded-md">
            <div className="hero-content flex-col lg:flex-row h-96">

                <img src={Dental} className=" -mt-36  mx-20 h-[100%] lg:w-1/2 hidden lg:flex rounded-lg shadow-2xl" alt='' />

                <div className=' h-[100%]'>
                    <p className=' text-teal-500'>Appointment</p>
                    <h1 className="text-3xl text-white font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PraimaryButton>Get Started</PraimaryButton>
                </div>
            </div>
        </div>
    )
}
