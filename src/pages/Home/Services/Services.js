import React, { useContext } from 'react'
import { AuthProvider } from '../../../Context/AuthContext/AuthContext'
import Tretment from './../../../assets/images/cavity.png'
import Fluoride from './../../../assets/images/fluoride.png'
import Whitening from './../../../assets/images/whitening.png'
import { ServiceCard } from './ServiceCard'
export const Services = () => {
    const { user } = useContext(AuthProvider);
    console.log(user);
    const cardData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: Tretment,
            shadow: 'shadow-md'
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: Fluoride,
            shadow: 'shadow-md'
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: Whitening,
            shadow: 'shadow-md'
        },
    ]
    return (
        <div className=' mt-20 space-y-10'>
            <div className=' text-center'>
                <p className=' text-teal-700'>OUR SERVICES</p>
                <h1 className=' text-3xl font-semibold'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 gap-x-8  md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto'>
                {
                    cardData.map(card => <ServiceCard key={card.id} card={card} />)
                }
            </div>
        </div>
    )
}
