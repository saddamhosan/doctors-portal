import { format } from "date-fns";
import React, { useEffect, useState } from "react";

const AvailableAppointment = ({ date, setTreatment }) => {
  const [services,setServices]=useState([]) 
  useEffect(()=>{
    fetch("https://infinite-oasis-14663.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  },[])
  return (
    <div>
      <p className="text-center text-secondary text-xl font-bold">
        Available appointment on {format(date, "PP")}
      </p>

      <div className="md:grid grid-cols-3 gap-6 my-10">
        {services.map((service) => (
          <div key={service._id} className="shadow-lg py-6 mt-6">
            <p className="text-center text-secondary text-xl">{service.name}</p>
            <p className="text-center text-xl">
              {service.slot?.length > 0 ? (
                <span>{service?.slot[0]}</span>
              ) : (
                <span className="text-red-500">Try another day</span>
              )}
            </p>
            <p className="text-center text-xl">
              {service.slot?.length}{" "}
              {service.slot?.length > 1 ? "spaces" : "space"} available
            </p>
            <div className="flex justify-center my-4">
              <label
                onClick={() => setTreatment(service)}
                disabled={service.slot?.length === 0}
                htmlFor="book-modal"
                className="btn modal-button btn-sm  bg-gradient-to-r from-secondary to-primary text-white font bold font-serif border-0"
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
