import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { CheckoutForm } from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_Publish_key);

export const Payment = () => {
    const booking = useLoaderData();
    const [cardError, setCardError] = useState('')
    const [cardSuccess, setCardSuccess] = useState('')
    return (
        <div>
            <div>
                <h1 className=' text-4xl'>please pay <strong>${booking.price}</strong> for your Appoinment on {booking.date} at {booking.slots}</h1>
                {
                    cardError && <p className=' text-red-500 text-center'>{cardError}</p>
                }
                {
                    cardSuccess && toast.success(cardSuccess)
                }
            </div>
            <div className=' w-96 my-14 bg-base-200 h-96 mx-auto rounded-md shadow-md container'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm setCardSuccess={setCardSuccess} setCardError={setCardError} booking={booking}></CheckoutForm>
                </Elements>
            </div>
        </div>
    )
}


