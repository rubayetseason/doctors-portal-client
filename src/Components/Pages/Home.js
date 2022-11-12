import React from 'react';
import Banner from './Banner';
import InfoCards from './InfoCards';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <div className='px-2 md:px-5 lg:px-5'>
            <InfoCards></InfoCards>
            </div>
        </div>
    );
};

export default Home;