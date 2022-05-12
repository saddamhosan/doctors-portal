import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookModal = ({ treatment, date, setTreatment }) => {
  const [user]=useAuthState(auth)
  const { name, slot } = treatment;

  const handleSubmit = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(slot);
    setTreatment(null)
  };

  return (
    <div>
      <input type="checkbox" id="book-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="book-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-xl text-center text-secondary">{name}</h3>
          <form onSubmit={handleSubmit}>
            <input
              className="block border rounded-xl my-2 w-10/12 mx-auto p-2"
              type="text"
              name="date"
              value={format(date, "PP")}
              disabled
              readOnly
            />
            <select
              name="slot"
              className="block select select-bordered  w-10/12 mx-auto p-2"
            >
              {slot.map((slo) => (
                <option value={slo}>{slo}</option>
              ))}
            </select>
            <input
              className="block border rounded-xl my-2 w-10/12 mx-auto p-2"
              type="text"
              name="name"
              value={user?.displayName}
              disabled
              readOnly
            />
            <input
              className="block border rounded-xl my-2 w-10/12 mx-auto p-2"
              type="email"
              name="email"
              value={user?.email}
              readOnly
              disabled
            />
            <input
              className="block border rounded-xl my-2 w-10/12 mx-auto p-2"
              type="number"
              name="number"
              placeholder="Your Number"
            />

            <input
              className="block my-3 w-1/4 mx-auto btn bg-gradient-to-r from-secondary to-primary text-white font bold font-serif border-0"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookModal;