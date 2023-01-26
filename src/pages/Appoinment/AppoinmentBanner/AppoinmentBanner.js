import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import appoinmentBg from '../../../assets/images/bg.png';
import Chair from '../../../assets/images/chair.png';
export const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {
    let footer = <p>Please pick a day.</p>;
    return (
        <div className=' grid grid-cols-1 px-5 mx-auto md:grid-cols-2 lg:grid-cols-2 py-20 gap-10' style={{ background: `url(${appoinmentBg})` }}>
            <div className='my-auto space-y-8'>
                <DayPicker mode='single' selected={selectedDate} onSelect={setSelectedDate} footer={footer} />
                <p>You picked {format(selectedDate, 'PP')}.</p>;
            </div>
            <div>
                <img alt='' src={Chair} />
            </div>
        </div >
    )
}
