import React from "react";
import { toast } from "react-hot-toast";

const Doctor = ({ doctor, index, refetch }) => {
  const { _id, name, specialty, img } = doctor;
  const handleDelete = (id) => {
    const confirm = window.confirm(
      `Are you sure you went to delete to dr.${name}`
    );
    if (confirm) {
      fetch(`https://infinite-oasis-14663.herokuapp.com/doctor/${id}`, {
        method: "delete",
        headers: {
          authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success(`delete doctor ${name}`);
            refetch();
          }
        });
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn btn-xs bg-red-500">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Doctor;
