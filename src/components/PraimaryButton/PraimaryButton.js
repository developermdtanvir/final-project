import React from 'react'

export const PraimaryButton = ({ children }) => {
    return (
        <button className='focus:ring-2 ring-cyan-700 rounded px-12 py-2   bg-gradient-to-r from-cyan-500 to-blue-500 font-bold text-white '>{children}</button>
    )
}
