import React from 'react'

export const AvailableOption = ({ option }) => {
    const { name, slots } = option
    return (
        <div className="card w-96 cursor-pointer shadow-xl hover:shadow-2xl duration-700">
            <div className="card-body text-center">
                <p className=' text-teal-500 font-semibold text-xl'>{name}</p>
                <p>{slots.length > 0 ? slots[0] : 'Not Service Avaiable Try Another Day'}</p>
                <p>{slots.length > 0 ? `Avaible ${slots.length > 1 ? 'Services' : 'Service'} ${slots.length}` : ''}</p>
            </div>
        </div>
    )
}
