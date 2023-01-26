import React from 'react';

export const AppoinmentCard = ({ appoinment }) => {
    const { name, time } = appoinment;
    return (
        <div className="card w-96 cursor-pointer shadow-xl hover:shadow-2xl duration-700">
            <div className="card-body">
                <p className=' text-teal-500 font-semibold text-xl'>{name}</p>
            </div>
        </div>
    )
}
