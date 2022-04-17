import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate()

    const navigateLogin = () =>{
        navigate('/login')
    }
    const handleRegister = event =>{
        event.preventDefault();
    }
    return (
        <div className='register-info'>
            <h1>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id=""  placeholder='Your name '/>
                
                <input type="email" name="email" id="" placeholder='Your email' required/>
               
                <input type="password" name="password" id="" placeholder='Your password' required/>
                <input type="submit" value="Register" />
                <p>Already have an account ? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
                
            </form>
        </div>
    );
};

export default Register;