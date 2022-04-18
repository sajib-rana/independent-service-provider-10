import React from 'react';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from '../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth, { sendEmailVerification : true});
    const navigate = useNavigate()

    const navigateLogin = () =>{
        navigate('/login')
    }
    if(user){
        navigate('/home')
    }
    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='register-info'>
            <h1>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id=""  placeholder='Your name '/>
                
                <input type="email" name="email" id="" placeholder='Your email' required/>
               
                <input type="password" name="password" id="" placeholder='Your password' required/>
                <input className='register-btn' type="submit" value="Register" />
                
            </form>
            <p>Already have an account ? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;