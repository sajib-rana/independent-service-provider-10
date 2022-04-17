import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, picture, price, description} = service;
    return (
        <div className='service-info'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price:${price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>Book Now</button>
        </div>
    );
};

export default Service;