import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const {treatment, appointmentDate, slot, price} = booking;
    console.log(booking);
    return (
        <div className='w-3/4'>
           <h3 className="text-2xl font-semibold">Payment for {treatment}</h3>
           <p className='mt-4'><strong>$ {price}</strong> is due for your appointment on {appointmentDate} at {slot}</p>
<div className='w-1/2 mt-5'>
<Elements stripe={stripePromise}>
                    <CheckoutForm
                    />
                </Elements>
</div>
        </div>
    );
};

export default Payment;