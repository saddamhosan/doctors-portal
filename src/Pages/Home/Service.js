import React from 'react';

const Service = ({service}) => {
    return (
      <div className="card  bg-base-100 shadow-xl my-6">
        <figure className="px-10 pt-10">
          <img
            src={service.img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{service.title}</h2>
          <p>{service.detail}</p>
        </div>
      </div>
    );
};

export default Service;