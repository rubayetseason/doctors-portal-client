import React, { useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "./BookingModal";
import { useQuery } from "@tanstack/react-query";


const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);

  const {data: appointmentOptions = []} = useQuery({
    queryKey: ['appointmentOptions'],
    queryFn: async () => {
      const res = fetch("http://localhost:5000/appointmentOptions");
      const data = await (await res).json();
      return data;
    }
  })

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
{ treatment &&  <BookingModal treatment={treatment} setTreatment={setTreatment} selectedDate={selectedDate}></BookingModal> }
    </div>
  );
};

export default AvailableAppointments;
