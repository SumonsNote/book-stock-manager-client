import React from 'react';
import google from '../../Images/google.png'
import { useSignInWithGoogle, useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    const [user1, loading1, error1] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        const url = 'http://localhost:5000/login';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("accessToken", data.token);
                navigate('/');
            });
        
    }

    return (
        <div className='container d-flex justify-content-center'>
            <button onClick={() => signInWithGoogle()} className='border-0 p-2 border rounded-pill'>
                <img style={{ width: '30px', height: '30px' }} src={google} alt="" />
                <span className='px-2'>Google Sign In</span>
            </button>
        </div>
    );
};

export default SocialLogin;