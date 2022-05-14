import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import AppointBanner from './AppointBanner';
import AvailableAppointment from './AvailableAppointment';
import BookModal from './BookModal';

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const [treatment,setTreatment]=useState(null)

   const formattedDate = format(date, "PP");
   const {
     data: services,
     isLoading,
     refetch,
   } = useQuery(["available", formattedDate], () =>
     fetch(`http://localhost:4000/available?date=${formattedDate}`).then(
       (res) => res.json()
     )
   );
   if (isLoading) {
     return <Loading />;
   }
    return (
      <div className="mx-10">
        <AppointBanner date={date} setDate={setDate} />
        <AvailableAppointment
          services={services}
          date={date}
          setTreatment={setTreatment}
        />
        {treatment && (
          <BookModal
            refetch={refetch}
            treatment={treatment}
            date={date}
            setTreatment={setTreatment}
          />
        )}
      </div>
    );
};

export default Appointment;