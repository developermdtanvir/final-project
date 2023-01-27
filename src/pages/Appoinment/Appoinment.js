import React, { useState } from 'react'
import { AppoinmentBanner } from './AppoinmentBanner'
import { AvaivleAppoinment } from './AvailavaleAppoinment/AvailavaleAppoinment'

export const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppoinmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <AvaivleAppoinment selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </div>
    )
}
