import React from 'react'

export const InfoCard = ({ info }) => {
    const cardStyle = `
    ${info.bgColor} rounded-md w-80 h-48 flex justify-center items-center space-x-4 p-6 text-white
    `
    return (
        <div className={cardStyle}>
            <div> <img alt='' src={info.img} /> </div>
            <div>
                <h1 className=' text-2xl font-semibold'>{info.name}</h1>
                <p>{info.description}</p>
            </div>
        </div>
    )
}
