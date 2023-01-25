import React from 'react'
import chair from '../../../../assets/images/chair.png'
import { PraimaryButton } from '../../../../components/PraimaryButton/PraimaryButton'
import './Smile.css'
export const Banner = () => {
    return (
        <div>
            <div className='smile'>
                <div className=' grid grid-cols-1 px-5 mx-auto md:grid-cols-2 lg:grid-cols-2 py-20 gap-10'>
                    <div className='my-auto space-y-8'>
                        <h1 className=' text-4xl font-bold'>Your New Smile Starts <br /> Here</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard dummy text ever since the</p>
                        <PraimaryButton>GET STARTED</PraimaryButton>
                    </div>
                    <div>
                        <img alt='' src={chair} />
                    </div>
                </div >
            </div>
        </div>
    )
}
