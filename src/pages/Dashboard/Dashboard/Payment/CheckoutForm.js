import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../../../Context/AuthContext/AuthContext';

export const CheckoutForm = ({ booking, setCardError, setCardSuccess }) => {
    const price = booking.price;
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthProvider);
    const email = user?.email;
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('')
    const [prossecing, setProssecing] = useState(false)
    const [trensectionId, setTrensectionId] = useState('')

    useEffect(() => {
        fetch(`https://doctors-portal-server-liart-eight.vercel.app/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authrizetion: `bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify({ price })
        }).then(res => res.json())
            .then(data => {
                console.log('checkout', data);
                setClientSecret(data.clientSecret)
            });
    }, [price])



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        console.log(event);


        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (error) {
            setCardError(error.message)
            setCardSuccess('')
        } else {
            setCardError('')
            setCardSuccess('Payment Successfylly')
        }
        setProssecing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: booking.email,

                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log(paymentIntent);
            const payment = {
                price,
                trensectionId: paymentIntent.id,
                email,
                boookingId: booking._id
            }
            fetch('https://doctors-portal-server-liart-eight.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authrizetion: `bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insartedId) {
                        setTrensectionId(paymentIntent.id)
                        setSuccess('Congrats ! your payment complited')
                    }

                })
        }
        setProssecing(false);

    };
    return (

        <div>
            <form className=' form-control flex p-10' onSubmit={handleSubmit}>
                <CardElement
                    className=' my-20'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }} />
                <button className=' btn btn-primary' type="submit" disabled={!stripe || !clientSecret || prossecing}>
                    Pay
                </button>
            </form>

            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your trensectionId : <span className=' font-bold'>{trensectionId}</span></p>
                </div>
            }
        </div>

    )
}
