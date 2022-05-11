import { format } from "date-fns";
import React from "react";

const AvailableAppointment = ({ date, setTreatment }) => {
  const services = [
    {
      _id: 1,
      name: "Teeth Orthodontics",
      slot: ["8.00-8.30 pm", "8.30-9.00 pm", "9.00-9.30 pm", "9.30-10.00 pm"],
    },
    {
      _id: 2,
      name: "Cosmetic Dentistry",
      slot: ["8.00-8.30 pm", "8.30-9.00 pm", "9.00-9.30 pm", "9.30-10.00 pm"],
    },
    {
      _id: 3,
      name: "Teeth Cleaning",
      slot: ["8.00-8.30 pm", "8.30-9.00 pm", "9.00-9.30 pm", "9.30-10.00 pm"],
    },
    {
      _id: 4,
      name: "Teeth Orthodontics",
      slot: [],
    },
    {
      _id: 5,
      name: "Teeth Orthodontics",
      slot: ["8.00-8.30 pm", "8.30-9.00 pm", "9.00-9.30 pm", "9.30-10.00 pm"],
    },
    {
      _id: 6,
      name: "Teeth Orthodontics",
      slot: ["8.00-8.30 pm", "8.30-9.00 pm", "9.00-9.30 pm", "9.30-10.00 pm"],
    },
  ];
  return (
    <div>
      <p className="text-center text-secondary text-xl font-bold">
        Available appointment on {format(date, "PP")}
      </p>

      <div className="grid grid-cols-3 gap-6 my-10">
        {services.map((service) => (
          <div key={service._id} className="shadow-lg py-6">
            <p className="text-center text-secondary text-xl">{service.name}</p>
            <p className="text-center text-xl">
              {service.slot.length > 0 ? (
                <span>{service.slot[0]}</span>
              ) : (
                <span className="text-red-500">Try another day</span>
              )}
            </p>
            <p className="text-center text-xl">
              {service.slot.length}{" "}
              {service.slot.length > 1 ? "spaces" : "space"} available
            </p>
            <div className="flex justify-center my-4">
              <label
                onClick={() => setTreatment(service)}
                disabled={service.slot.length === 0}
                for="book-modal"
                class="btn modal-button btn-sm  bg-gradient-to-r from-secondary to-primary text-white font bold font-serif border-0"
              >
                Book Appointment
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointment;
