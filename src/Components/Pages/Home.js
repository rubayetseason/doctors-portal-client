import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Exceptional from './Exceptional';
import InfoCards from './InfoCards';
import MakeAppointment from './MakeApppointment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <div className='mt-4 md:mt-14'>
            <Banner></Banner>
            </div>
            <div className='mt-14 px-2 md:px-5 lg:px-5'>
            <InfoCards></InfoCards>
            <Services></Services>
            <div className='mt-24 md:px-5 lg:px-5'>
                <Exceptional></Exceptional>
            </div>
            <div className='mt-1 md:px-5 lg:px-5'>
                <MakeAppointment></MakeAppointment>
            </div>
            <div className='mt-24 px-5 md:px-5 lg:px-5'>
                <Testimonial></Testimonial>
            </div>
            <div className='mt-24'>
                <ContactUs></ContactUs>
            </div>
            </div>
        </div>
    );
};

export default Home;