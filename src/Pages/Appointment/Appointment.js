import React, { useState } from 'react';
import AppointBanner from './AppointBanner';
import AvailableAppointment from './AvailableAppointment';
import BookModal from './BookModal';

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const [treatment,setTreatment]=useState(null)
    return (
      <div className="mx-10">
        <AppointBanner date={date} setDate={setDate} />
        <AvailableAppointment date={date} setTreatment={setTreatment} />
        {treatment && (
          <BookModal
            treatment={treatment}
            date={date}
            setTreatment={setTreatment}
          />
        )}
      </div>
    );
};

export default Appointment;