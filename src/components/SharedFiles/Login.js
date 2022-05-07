import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../Firebase.init';
import Loading from './Loading';
import SocialLogin from './SocialLogin';


const Login = () => {
    const navigate = useNavigate()
    const emailRef = useRef([])
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
      );

      const handleLogin = e => {
          e.preventDefault()
          const email = e.target.email.value;
          const password = e.target.password.value;
          signInWithEmailAndPassword(email, password)

      }

    const handleResetPassword = async() => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email)
            toast('Email sent')
            
        }else {
            toast('Please enter valid email')
        }
    }
      if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error || resetError) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
    return (
        <form onSubmit={handleLogin} className='w-25 container py-5 mb-5'>
            <h2 className='text-center'>Login</h2>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name='email' ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
            </div>
            

            <button type="submit" className="btn btn-primary">Login</button>
            <div className='d-flex justify-content-between align-items-center py-3'>
                <span>Forget password?</span>
                <span onClick={handleResetPassword} className='btn btn-link'>Reset password</span>
            </div>

         
            <div className='d-flex justify-content-between py-5'>
            <p>Didn't have an account?</p>
            <Link to='/register'><p>Create account</p></Link>
            </div>
            <SocialLogin></SocialLogin><ToastContainer></ToastContainer>
        </form>
    );
};

export default Login;