import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { Speainer } from '../../shared/Speainer/Speainer';
import { AppoinmentOptions } from './AppoinmentOptions';
import { BookingModal } from './BookingModal';

export const AvaivleAppoinment = ({ selectedDate, setSelectedDate }) => {
    const [tretment, setTretment] = useState(null);
    const date = format(selectedDate, 'PP')
    const { data: appoinment, isLoading, refetch } = useQuery({
        queryKey: ['appoinment', date],
        queryFn: () => fetch(`https://doctors-portal-server-liart-eight.vercel.app/appoinment?date=${date}`).then(res => res.json())
    })
    if (isLoading) {
        return <Speainer />
    }
    return (
        <div className=' mt-20 text-center text-teal-600 font-bold'>
            <div>Available Services on {format(selectedDate, 'PP')}</div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    appoinment.map(appoinment => <AppoinmentOptions key={appoinment._id}
                        setTretment={setTretment} selectedDate={selectedDate} appoinment={appoinment} />)
                }
            </div>
            <div>
                {
                    tretment && <BookingModal refetch={refetch} setTretment={setTretment} selectedDate={selectedDate} tretment={tretment} />}
            </div>
        </div>
    )
}
