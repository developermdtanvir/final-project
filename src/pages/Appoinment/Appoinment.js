import React, { useState } from 'react';

import 'react-calendar/dist/Calendar.css';
import { AppoinmentBanner } from './AppoinmentBanner/AppoinmentBanner';

import { AvailableAppoinment } from './AvailableAppoinment/AvailableAppoinment';
export const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())


    // const date = String(value)
    // const dateSplit = date.slice(3, 15)
    return (
        <div>
            <AppoinmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <AvailableAppoinment selectedDate={selectedDate} />
            <div className=' mt-40 space-y-10'>
                <div className=' text-center'>
                    <h1 className=' text-teal-500 font-normal text-2xl'>Available slots for Teeth Orthodontics </h1>
                </div>
            </div>
        </div>
    )
}
