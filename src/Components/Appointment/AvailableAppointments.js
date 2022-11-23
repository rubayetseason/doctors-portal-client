import React, { useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "./BookingModal";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Shared/Loader";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = fetch(
        `https://doctors-portal-server-rubayetseason.vercel.app/appointmentOptions?date=${date}`
      );
      const data = await (await res).json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="mt-16">
      <p className="text-center text-secondary font-bold">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          selectedDate={selectedDate}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
