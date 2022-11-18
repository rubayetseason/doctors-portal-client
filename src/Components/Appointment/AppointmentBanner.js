import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header className="my-6">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="dentist chair"
            className="w-5/6 md:w-1/2 rounded-lg"
          />
          <div className="">
            <h1 className="text-xl text-center font-bold text-secondary mt-3 underline">Select a date</h1>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={(data) => {
                if(data) {
                  setSelectedDate(data)
                }
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
