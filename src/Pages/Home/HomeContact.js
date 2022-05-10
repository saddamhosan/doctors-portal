import React from 'react';
import bg from '../../assets/images/appointment.png';

const HomeContact = () => {
    return (
      <div
        style={{ background: `url(${bg})`, backgroundSize: "cover" }}
        className="my-20"
      >
        <div className="text-center py-10">
          <h4 className="text-secondary text-xl">Contact Us</h4>
          <h1 className="text-3xl text-white">Stay Connected with us</h1>
          <form>
            <input
              className="lg:w-1/2 w-10/12 my-3 text-xl p-2 rounded-xl"
              type="email"
              name="email"
              placeholder="Email Address"
            />
            <br />
            <input
              className="lg:w-1/2 w-10/12 my-3 text-xl p-2 rounded-xl"
              type="text"
              name="subject"
              placeholder="Subject"
            />
            <br />
            <textarea
              className="lg:w-1/2 w-10/12 my-3 text-xl p-2 rounded-xl"
              name="message"
              placeholder="Your message"
            ></textarea>
            <br />
            <input
              className="text-xl text-white bg-gradient-to-r from-secondary to-primary px-6 py-2 rounded-xl font-bold"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    );
};

export default HomeContact;