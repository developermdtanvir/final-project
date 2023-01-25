import React from 'react'
import quote from '../../../../assets/icons/quote.svg'
import people1 from '../../../../assets/images/people1.png'
import people2 from '../../../../assets/images/people2.png'
import people3 from '../../../../assets/images/people3.png'
import { TestmonialCard } from './TestmonialCard'
export const Testmonial = () => {
    const testmonialData = [
        {
            id: 1,
            name: 'Tanvir Hossain',
            from: 'Bangladesh',
            img: people1,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal'
        },
        {
            id: 2,
            name: 'Sanny Leon',
            from: 'India',
            img: people2,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal'
        },
        {
            id: 3,
            name: 'Miyakholifa',
            from: 'Uganda',
            img: people3,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal'
        },
    ]
    return (
        <div className=' mt-10 space-y-20'>
            <div className=' flex justify-between'>
                <div>
                    <p className=' text-[#19D3AE]'>Testmonial</p>
                    <h1 className=' text-2xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img alt='' src={quote} className=' lg:w-48 w-24' />
                </div>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    testmonialData.map(data => <TestmonialCard key={data.id} card={data} />)
                }
            </div>
        </div>
    )
}
