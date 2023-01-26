import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Chair from '../../assets/images/chair.png';
import { AppoinmentCard } from './AppoinmentCard';
import { Card } from './Card';
export const Appoinment = () => {
    const [value, onChange] = useState(new Date());
    const date = String(value)
    const dateSplit = date.slice(3, 15)
    const appoinmentData = [
        {
            _id: 1,
            name: 'Teeth Orthodontics',
            time: '8:00 AM -9:00 AM'
        },
        {
            _id: 2,
            name: 'Cosmetic Dentistry',
            time: '10:05 AM -11:00 AM'
        },
        {
            _id: 3,
            name: 'Teeth Cleaning',
            time: '11:05 AM -12:00 AM'
        },
        {
            _id: 4,
            name: 'Cavity Protection',
            time: '8:00 AM -9:00 AM'
        },
        {
            _id: 5,
            name: 'Pediatric Dental',
            time: '8:00 AM -9:00 AM'
        },
        {
            _id: 6,
            name: 'Oral Surgery',
            time: '8:00 AM -9:00 AM'
        },
    ]
    return (
        <div>
            <div className='hero-content flex-col-reverse lg:flex-row mt-20 p-20 space-x-10'>
                <div>
                    <Calendar onChange={onChange} value={value} />
                </div>
                <div className='flex flex-wrap justify-center '>
                    <img className=' w-96 lg:w-[594px]' src={Chair} alt='' />
                </div>
            </div>
            <div className=' mt-40 space-y-10 hidden lg:block'>
                <div className=' text-center'>
                    <h1 className=' text-teal-500 font-normal text-2xl'>Available Services on {dateSplit} </h1>
                    <p className=' text-gray-600 font-normal text-2xl'>Please select a service.</p>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        appoinmentData.map(appoinment => <AppoinmentCard key={appoinment._id} appoinment={appoinment} />)
                    }
                </div>
            </div>
            <div className=' mt-40 space-y-10'>
                <div className=' text-center'>
                    <h1 className=' text-teal-500 font-normal text-2xl'>Available slots for Teeth Orthodontics </h1>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        appoinmentData.map(appoinment => <Card key={appoinment._id} appoinment={appoinment} />)
                    }
                </div>
            </div>
        </div>
    )
}
