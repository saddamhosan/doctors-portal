import React from 'react';
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';

const AppointBanner = ({date,setDate}) => {
    

    return (
      <div
        style={{ background: `url(${bg})`, backgroundSize: "cover" }}
        class="hero min-h-[70vh] mb-20"
      >
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
    );
};

export default AppointBanner;