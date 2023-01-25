import React from 'react'
import Treatment from '../../../../assets/images/treatment.png'
import { PraimaryButton } from '../../../../components/PraimaryButton/PraimaryButton'
export const Dental = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img src={Treatment} className=" m-20 lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div className=' space-y-10'>
                    <h1 className="text-5xl font-bold">Exceptional Denta <br /> Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PraimaryButton>Get Started</PraimaryButton>
                </div>
            </div>
        </div>
    )
}
