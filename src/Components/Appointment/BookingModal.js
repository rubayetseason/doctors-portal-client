import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name: treatmentName, slots, price } = treatment;
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
      price,
    };

    fetch("https://doctors-portal-server-rubayetseason.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking Confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
    //send data to the server, once the data is set, close the modal and display toast

    //this is used to set the modal as null when there
    console.log(booking);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              <option>Select a time slot</option>
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              defaultValue={user?.displayName}
              disabled
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <br />
            <input
              className="w-full btn btn-accent"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
