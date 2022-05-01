import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from './Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let errorElement
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const handleLogin = e => {
          e.preventDefault()
          const email = e.target.email.value;
          const password = e.target.password.value;
          signInWithEmailAndPassword(email, password)
      }

      

      if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement = <p className='text-danger'>Password did not match</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <form onSubmit={handleLogin} className='w-25 container py-5'>
            <h2 className='text-center'>Login</h2>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
            {errorElement}
            <div className='d-flex justify-content-between py-5'>
            <p>Didn't have an account?</p>
            <Link to='/register'><p>Create account</p></Link>
            </div>
            <SocialLogin></SocialLogin>
        </form>
    );
};

export default Login;