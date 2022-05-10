import React from 'react';
import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
      <div style={{
        background:`url(${bg})`,
        backgroundSize:'cover'
      }} className='my-10'>
        <div className="hero min-h-[70vh] ">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <img
              src={chair}
              className="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
            <div className=" mt-4">
              <h1 className="text-5xl font-bold">Your new smile start here</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn bg-gradient-to-r from-secondary to-primary text-white font bold font-serif border-0">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;