import React from 'react'
import { Services } from '../Services/Services'
import { Banner } from './Banner/Banner'
import { ContactInfo } from './ContactInfo/ContactInfo'
import { Dental } from './Dental/Dental'
import { InfoCards } from './InfoCards/InfoCards'
import { MakeAppoientment } from './MakeAppoientment/MakeAppoientment'
import { Testmonial } from './Testmonial/Testmonial'

export const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <InfoCards />
            <Services />
            <Dental />
            <MakeAppoientment />
            <Testmonial />
            <ContactInfo />
        </div>
    )
}
