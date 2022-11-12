import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div className={`card text-white p-6 md:card-side shadow-xl ${bgClass}`}>
            <figure>
                <img src={icon} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-semibold text-2xl">{name}</h2>
                <p className='text-lg'>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;