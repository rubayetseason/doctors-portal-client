import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Exceptional = () => {
    return (
        <section>
            <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} alt='' className="w-full md:max-w-sm rounded-lg shadow-2xl" />
    <div className='mt-4 md:px-10'>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic corporis neque a pariatur nobis unde quibusdam! Vel consequatur, libero quam commodi quia, alias possimus aspernatur eligendi reiciendis nulla modi veniam ratione corrupti ab deserunt, cum nam eum fuga harum saepe adipisci. At praesentium reprehenderit deleniti. Facere blanditiis error labore perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae suscipit nobis quasi! Obcaecati ut dolorem illum officiis accusantium ratione totam corporis, impedit consequuntur libero mollitia voluptas corrupti sequi consectetur temporibus voluptatibus beatae autem itaque?</p>
      <PrimaryButton>Book Appointment</PrimaryButton>

    </div>
  </div>
</div>
        </section>
    );
};

export default Exceptional;