import React from 'react';

export const TestmonialCard = ({ card }) => {
    const { name, description, img, from } = card;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
            <figure><img src={img} alt="Shoes" className=' rounded-full ring-2 ring-indigo-600' /></figure>
        </div>
    )
}
