import React from 'react'
import clock from './../../../../assets/icons/clock.svg'
import location from './../../../../assets/icons/marker.svg'
import phone from './../../../../assets/icons/phone.svg'
import { InfoCard } from './InfoCard'
export const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Alowes Open in My Dental Services',
            img: clock,
            bgColor: 'bg-gradient-to-r from-cyan-500 to-blue-500'
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States',
            img: location,
            bgColor: 'bg-slate-700'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '+000 123 456789',
            img: phone,
            bgColor: 'bg-gradient-to-r from-cyan-500 to-blue-500'
        },
    ]
    return (
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto'>

            {
                cardData.map(data => <InfoCard key={data.id} info={data} />)
            }
        </div>
    )
}
