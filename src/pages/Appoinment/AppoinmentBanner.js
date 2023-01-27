import React from 'react'
import { DayPicker } from 'react-day-picker'
import chair from '../../assets/images/chair.png'
export const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <div className=' grid grid-cols-1 px-5 mx-auto md:grid-cols-2 lg:grid-cols-2 py-20 gap-10'>
            <div className='my-auto space-y-8'>
                <DayPicker
                    mode='single'
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                />
            </div>
            <div>
                <img alt='' src={chair} />
            </div>
        </div >
    )
}