import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';

const Testimonial = () => {
    const patients = [
      {
        _id: 1,
        name: "Winson Herry",
        location: "Dhaka",
        detail:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem veniam odio fugiat vitae ex magni Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem veniam odio fugiat vitae ex magni",
        img: people1,
      },
      {
        _id: 2,
        name: "Rafi",
        location: "Barisal",
        detail:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem veniam odio fugiat vitae ex magni Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem veniam odio fugiat vitae ex magni",
        img: people2,
      },
      {
        _id: 3,
        name: "kouser",
        location: "Baguda",
        detail:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem veniam odio fugiat vitae ex magni Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem veniam odio fugiat vitae ex magni",
        img: people3,
      },
    ];
    return (
      <div>
        <div className="flex justify-between">
          <div>
            <h4 className="text-xl text-secondary">Testimonial</h4>
            <h1 className="text-3xl">What Our Patients Says</h1>
          </div>
          <div>
            <img src={quote} alt="" className="lg:w-48 w-24" />
          </div>
        </div>
        <div className='lg:grid grid-cols-3 gap-10 my-4 p-4 '>
          {patients.map((patient) => (
            <div key={patient._id} className='shadow-lg p-6 mt-6'>
              <p>{patient.detail}</p>
              <div className='my-4 flex items-center space-x-2'>
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={patient.img} alt='' />
                  </div>
                </div>
                <div>
                  <h4>{patient.name}</h4>
                  <p>{patient.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Testimonial;