import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
  const navigate=useNavigate()
    const [user]=useAuthState(auth)
    const [myBooking, setMyBooking] = useState([]);
    const url = `http://localhost:4000/booking?patentEmail=${user.email}`;
    useEffect(()=>{
        fetch(url,{
          headers:{
            'authorization':`Bearer ${localStorage.getItem('Token')}`
          }
        })
          .then((res) =>{ 
            console.log(res)
            if (res.status===401 || res.status===403){
              localStorage.removeItem("Token");
              signOut(auth);
              navigate('/login')
            }
            return res.json()
          })
          .then((data) => setMyBooking(data));
    },[url ,navigate])
    return (
      <div className="overflow-x-auto">
        <table className="table w-full">
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

            {myBooking?.map((service, index) => (
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