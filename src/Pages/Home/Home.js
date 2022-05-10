import React from 'react';
import Banner from './Banner';
import HomeContact from './HomeContact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='mx-10'>
            <Banner/>
            <Info/>
            <Services/>
            <MakeAppointment/>
            <Testimonial/>
            <HomeContact/>
        </div>
    );
};

export default Home;