import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
      <div>
        <div className="hero min-h-[70vh]">
          <div className="hero-content flex-col lg:flex-row-reverse mx-10">
            <img
              src={chair}
              className="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
            <div className="lg:w-1/2 mr-4 mt-4">
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