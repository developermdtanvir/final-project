import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { AvailableOption } from './AvailableOption';
import { BookingModal } from './BookingModal';

export const AvailableAppoinment = ({ selectedDate }) => {
    const [appoinment, setAppoinment] = useState([]);
    useEffect(() => {
        fetch('appoinment.json')
            .then(res => res.json())
            .then(data => setAppoinment(data));
    }, [])
    return (

        <div className=' mt-40 space-y-10 hidden lg:block'>
            <div className=' text-center'>
                <h1 className=' text-teal-500 font-normal text-2xl'>Available Services on {format(selectedDate, 'PP')} </h1>
                <p className=' text-gray-600 font-normal text-2xl'>Please select a service.</p>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    appoinment.map(option => <AvailableOption key={option._id} appoinment={appoinment} option={option} />)
                }
            </div>
            <BookingModal />
        </div>

    )
}
