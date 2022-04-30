import React from 'react';
import google from '../../Images/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    if(loading){
        return <Loading></Loading>
    }
    if (user) {
        navigate('/');
    }

    return (
        <div className='container d-flex justify-content-center'>
            <button onClick={() => signInWithGoogle()} className='border-0 p-2 border rounded-pill'>
            <img style={{ width: '30px', height: '30px'}} src={google} alt=""/>
                <span className='px-2'>Google Sign In</span>
            </button>
        </div>
    );
};

export default SocialLogin;