import React from 'react';

export const AppoinmentOptions = ({ selectedDate, appoinment, setTretment }) => {
    const { name, slots, price } = appoinment;
    console.log(slots);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center font-semibold text-xl">{name}</h2>
                <p>
                    <small>price:${price}</small>
                </p>
                {slots.length > 0 ? <p>service Available {slots.length}</p> : 'Not Available Service'}
                <div className="card-actions justify-center">
                    <label onClick={() => setTretment(appoinment)} htmlFor="booking_modal" className="btn">Book Appoinment</label>
                </div>
            </div>
        </div>
    )
}
