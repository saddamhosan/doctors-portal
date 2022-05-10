import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';

const MakeAppointment = () => {
    return (
      <div style={{ background: `url(${appointment})` }} className='mt-40 mb-20'>
        <div className="flex justify-center items-center mt-16">
          <div className="flex-1 flex justify-center">
            <img src={doctor} alt="" className="max-h-[80vh] mt-[-120px] hidden lg:block" />
          </div>
          <div className="lg:flex-1 p-8 mr-10 text-white">
              <h4 className='text-xl text-secondary'>Appointment</h4>
            <h1 className="text-4xl mb-4 font-bold">
              Make an appointment Today
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              quidem porro, possimus aspernatur eos corrupti! Nam, amet dolorum,
              odit nihil in blanditiis alias magnam dolore nesciunt doloribus,
              est laborum asperiores.
            </p>
            <button className="btn bg-gradient-to-r from-secondary to-primary text-white font bold font-serif border-0 mt-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
};

export default MakeAppointment;