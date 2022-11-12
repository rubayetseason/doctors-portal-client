import React from 'react';
import Banner from './Banner';
import InfoCards from './InfoCards';
import Services from './Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <div className='mt-14 px-2 md:px-5 lg:px-5'>
            <InfoCards></InfoCards>
            <Services></Services>
            </div>
        </div>
    );
};

export default Home;