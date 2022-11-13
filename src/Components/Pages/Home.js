import React from 'react';
import Banner from './Banner';
import Exceptional from './Exceptional';
import InfoCards from './InfoCards';
import MakeAppointment from './MakeApppointment';
import Services from './Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <div className='mt-14 px-2 md:px-5 lg:px-5'>
            <InfoCards></InfoCards>
            <Services></Services>
            <div className='mt-24 md:px-5 lg:px-5'>
                <Exceptional></Exceptional>
            </div>
            <div className='mt-1 md:px-5 lg:px-5'>
                <MakeAppointment></MakeAppointment>
            </div>
            </div>
        </div>
    );
};

export default Home;