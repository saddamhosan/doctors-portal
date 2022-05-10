import React from "react";
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import treatment from "../../assets/images/treatment.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";


const Services = () => {
  const services = [
    {
      _id: 1,
      img: cavity,
      title: "Cavity Filling",
      detail:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem veniam odio fugiat vitae ex magni",
    },
    {
      _id: 2,
      img: fluoride,
      title: "Fluoride Treatment",
      detail:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem veniam odio fugiat vitae ex magni",
    },
    {
      _id: 1,
      img: whitening,
      title: "Teeth Whitening",
      detail:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem veniam odio fugiat vitae ex magni",
    },
  ];
  return (
    <div className="my-20">
      <div className="text-center">
        <h1 className="text-xl text-primary">OUR SERVICES</h1>
        <h1 className="text-3xl">Services We Provide</h1>
      </div>
      <div className="lg:grid grid-cols-3 gap-5">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>

      <div className="lg:flex justify-center items-center mt-16">
        <div className="flex-1 flex justify-center">
          <img src={treatment} alt="" className="max-h-[80vh]" />
        </div>
        <div className="flex-1 mr-10 p-6">
          <h1 className="text-4xl mb-4 font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            quidem porro, possimus aspernatur eos corrupti! Nam, amet dolorum,
            odit nihil in blanditiis alias magnam dolore nesciunt doloribus, est
            laborum asperiores.
          </p>
          <button className="btn bg-gradient-to-r from-secondary to-primary text-white font bold font-serif border-0 mt-4">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
