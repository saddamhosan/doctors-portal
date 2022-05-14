import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [user]=useAuthState(auth)
    const [myBooking, setMyBooking] = useState([]);
    const url = `http://localhost:4000/booking?patentEmail=${user.email}`;
    useEffect(()=>{
        fetch(url)
          .then((res) => res.json())
          .then((data) => setMyBooking(data));
    },[url])
    return (
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Treatment</th>
              <th>date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}

            {myBooking.map((service, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{service.treatment}</td>
                <td>{service.date}</td>
                <td>{service.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default MyAppointment;