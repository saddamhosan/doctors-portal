import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import User from './User';

const AllUser = () => {
    const navigate = useNavigate();
    const {
      data: users,
      isLoading,
      refetch,
    } = useQuery("users", () =>
      fetch("https://infinite-oasis-14663.herokuapp.com/users", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }).then((res) => {
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem("Token");
          signOut(auth);
          navigate("/login");
        }
        return res.json();
      })
    );
    if(isLoading){
        return <Loading/>
    }
    
    return (
      <div>
        <h1>All user:{users?.length}</h1>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>No.</th>
                <th>User Email</th>
                <th>Make Admin</th>
                <th>Delete Admin</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <User key={index} user={user} index={index} refetch={refetch} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllUser;