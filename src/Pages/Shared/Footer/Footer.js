import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='text-center mt-5'>
            <h3>Copyright &copy;{year}</h3>
        </div>
    );
};

export default Footer;