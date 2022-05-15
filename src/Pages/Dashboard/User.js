import React from 'react';
import toast from 'react-hot-toast';

const User = ({ user, index, refetch }) => {
  const { email, role } = user;
  const handleMakeAdmin = () => {
    fetch(`http://localhost:4000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    })
      .then((res) => {
          if(res.status===403){
              toast.error("Not successfully made admin");
          }
          return res.json()
    })
      .then((data) => {
          if (data.matchedCount>0){
             toast.success("successfully made admin");
             refetch();
          }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={handleMakeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs">Delete Admin</button>
      </td>
    </tr>
  );
};

export default User;