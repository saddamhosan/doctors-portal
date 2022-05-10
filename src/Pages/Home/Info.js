import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    return (
      <div className="grid lg:grid-cols-3 gap-5 my-20">
        <InfoCard
          title="Opening Hours"
          img={clock}
          bgClass="bg-gradient-to-r from-secondary to-primary"
        />
        <InfoCard title="Visit our location" img={marker} bgClass="bg-accent" />
        <InfoCard
          title="Contact us now"
          img={phone}
          bgClass="bg-gradient-to-r from-secondary to-primary"
        />
      </div>
    );
};

export default Info;