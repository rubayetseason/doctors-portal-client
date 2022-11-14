import React from 'react';
import { format } from "date-fns";

const BookingModal = ({treatment, selectedDate, setTreatment}) => {
    const {name, slots} = treatment;
    const date = format(selectedDate, 'PP');
    const handleBooking = event => {
      event.preventDefault();
      const form = event.target;
      const slot = form.slot.value;
      const name = form.name.value;
      const email = form.email.value;
      const phone = form.phone.value;

      const booking = {
        appointmentDate: date,
        treatment: name,
        patient: name,
        slot,
        email,
        phone,
    }
    //send data to the server, once the data is set, close the modal and display toast
    setTreatment(null);
    //this is used to set the modal as null when there
console.log(booking);
    };
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>
    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
    <input type="text" value={date} disabled className="input input-bordered w-full" />
    <select name='slot' className="select select-bordered w-full">
  <option>Select a time slot</option>
 {
  slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
 }
</select>
    <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full" />
    <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full" />
    <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full" />
    <br />
    <input className='w-full btn btn-accent' type="submit" value="Submit" />
    </form>
  </div>
</div>
        </>
    );
};

export default BookingModal;