import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    const {treatment, appointmentDate, slot, price} = booking;
    console.log(booking);
    return (
        <div>
           <h3 className="text-2xl font-semibold">Payment for {treatment}</h3>
           <p className='mt-4'><strong>$ {price}</strong> is due for your appointment on {appointmentDate} at {slot}</p>

        </div>
    );
};

export default Payment;