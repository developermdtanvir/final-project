import React from 'react'

export const ServiceCard = ({ card }) => {
    const { name, img, description } = card
    return (
        <div className=' shadow-md rounded-md space-y-10'>
            <div className=' px-32'>
                <img src={img} alt='' />
            </div>
            <div className=' text-center'>
                <h3 className=' font-semibold text-xl'>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}
