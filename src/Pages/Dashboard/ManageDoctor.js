import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Doctor from './Doctor';

const ManageDoctor = () => {
    const { data: doctors, isLoading ,refetch} = useQuery("doctor", () =>
      fetch("https://infinite-oasis-14663.herokuapp.com/doctors", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }).then(req=>req.json())
    );

    if(isLoading){
        return <Loading/>
    }
    return (
      <div>
        <h1>Total Doctors:{doctors.length}</h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>No.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Specialty</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, index) => (
                <Doctor
                  key={doctor._id}
                  doctor={doctor}
                  index={index}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageDoctor;