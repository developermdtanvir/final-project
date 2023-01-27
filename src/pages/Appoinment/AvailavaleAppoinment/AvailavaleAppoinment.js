import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { AppoinmentOptions } from './AppoinmentOptions';
import { BookingModal } from './BookingModal';

export const AvaivleAppoinment = ({ selectedDate, setSelectedDate }) => {
    const [appoinment, setAppoinment] = useState([]);
    const [tretment, setTretment] = useState(null)
    useEffect(() => {
        fetch('appoinment.json')
            .then(res => res.json())
            .then(data => setAppoinment(data))
    }, [])
    return (
        <div className=' mt-20 text-center text-teal-600 font-bold'>
            <div>Available Services on {format(selectedDate, 'PP')}</div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    appoinment.map(appoinment => <AppoinmentOptions
                        setTretment={setTretment} selectedDate={selectedDate} appoinment={appoinment} />)
                }
            </div>
            <div>
                {
                    tretment && <BookingModal selectedDate={selectedDate} tretment={tretment} />}
            </div>
        </div>
    )
}
