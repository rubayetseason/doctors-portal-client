import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride treatment helps prevent tooth decay, slow it down, or stop it from getting worse',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Dental Filling is a treatment modality to restore missing tooth structure due to decay or trauma.',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Teeth whitening involves bleaching your teeth to make them lighter and brighter',
            img: whitening
        },
    ]

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-3xl md:text-4xl my-3 font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-xl mb-5 font-semibold'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;