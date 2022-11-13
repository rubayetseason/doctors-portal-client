import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOptions, setappointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setappointmentOptions(data));
  }, []);
  return (
    <div className="mt-16">
      <p className="text-center text-secondary font-bold">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {
          appointmentOptions.map(option => <AppointmentOption key={option._id} appointmentOption={option} setTreatment={setTreatment}></AppointmentOption>)
        }
      </div>
{ treatment &&  <BookingModal treatment={treatment}></BookingModal> }
    </div>
  );
};

export default AvailableAppointments;
