import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    return (
      <div>
        <h2>{serviceId}</h2>
        <div className='text-center'>
          <Link to="/checkOut">
            <button className="btn btn-primary">Proced checkout</button>
          </Link>
        </div>
      </div>
    );
};

export default ServiceDetail;