import React, { useContext } from 'react'
import { useRouteError } from 'react-router-dom'
import { AuthProvider } from '../../../Context/AuthContext/AuthContext'

export const DisplayError = () => {
    const { signout } = useContext(AuthProvider)
    const error = useRouteError()
    return (
        <div className='flex items-center justify-center my-auto'>
            <div>
                <p className=' text-red-500'>Somthing Went Wrong!!!!!</p>
                <p className=' text-red-400'>{error.statusText || error.message}</p>
                <button className=' btn btn-primary' onClick={signout}>sign out</button>
            </div>
        </div>
    )
}
