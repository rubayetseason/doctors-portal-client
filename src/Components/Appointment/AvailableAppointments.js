import React from "react";
import { format } from "date-fns";

const AvailableAppointments = ({selectedDate}) => {
  return (
    <div>
      <p className="text-center text-secondary font-bold">
        Available Appointments on  {format(selectedDate, "PP")}
      </p>
    </div>
  );
};

export default AvailableAppointments;
