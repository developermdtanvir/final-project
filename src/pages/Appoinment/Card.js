import React from 'react'
import { PraimaryButton } from '../../components/PraimaryButton/PraimaryButton'

export const Card = ({ appoinment }) => {
    const { name, time } = appoinment
    return (
        <div className="card w-96  shadow-xl">
            <div className="card-body space-y-10">
                <div className=' space-y-2'>
                    <h2 className="card-title card-actions justify-center text-teal-500 text-center">{name}</h2>
                    <p className=' text-center'>{time}</p>
                </div>
                <div className="card-actions justify-center">
                    <PraimaryButton>Book Appointment</PraimaryButton>
                </div>
            </div>
        </div>
    )
}
