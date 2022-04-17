import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, picture, price, description} = service;
    const navigate = useNavigate()
    const ServiceDetail = id =>{
       navigate(`/service/${id}`)
    }
    return (
        <div className='service-info'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price:${price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=> ServiceDetail(id)} className='btn btn-primary'>Book Now</button>
        </div>
    );
};

export default Service;