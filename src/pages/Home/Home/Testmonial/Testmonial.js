import React from 'react'
import people1 from '../../../../assets/images/people1.png'
import people2 from '../../../../assets/images/people2.png'
import people3 from '../../../../assets/images/people3.png'
export const Testmonial = () => {
    return (
        <div className=' mt-10 space-y-20'>
            <div>
                <p className=' text-[#19D3AE]'>Testmonial</p>
                <h1 className=' text-2xl'>What Our Patients Says</h1>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className=' w-80 h-72 space-y-10 shadow-xl text-center'>
                    <div className=' h-1/2'>
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal </p>
                    </div>
                    <div className=' flex justify-center items-center space-x-5'>
                        <div>
                            <img className=' rounded-full ring ring-teal-500' src={people1} alt='' /></div>
                        <div>
                            <h1>Tanvir Hossain</h1>
                            <p>Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className=' w-80 h-72 space-y-10 shadow-xl text-center'>
                    <div className=' h-1/2'>
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal </p>
                    </div>
                    <div className=' flex justify-center items-center space-x-5'>
                        <div>
                            <img className=' rounded-full ring ring-teal-500' src={people2} alt='' /></div>
                        <div>
                            <h1>Tanvir Hossain</h1>
                            <p>Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className=' w-80 h-72 space-y-10 shadow-xl text-center'>
                    <div className=' h-1/2'>
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal </p>
                    </div>
                    <div className=' flex justify-center items-center space-x-5'>
                        <div>
                            <img className=' rounded-full ring ring-teal-500' src={people3} alt='' /></div>
                        <div>
                            <h1>Tanvir Hossain</h1>
                            <p>Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
