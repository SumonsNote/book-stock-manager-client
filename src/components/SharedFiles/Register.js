import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from './Loading';

const Register = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      let from = location.state?.from?.pathname || "/";



      const handleRegister = e => {
            e.preventDefault()
            const email = e.target.email.value;
            const password = e.target.password.value
            console.log(email, password);
            createUserWithEmailAndPassword(email, password)
      }

    if (user) {
        navigate(from, { replace: true });
    }
      if(loading) {
        return <Loading></Loading>
    }
    
    return (
        <div>
            <form onSubmit={handleRegister} className='w-25 container py-5'>
                <h2 className='text-center'>Please Register</h2>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Create Account</button>
                <div className='d-flex justify-content-between py-5'>
                    <p>Already have an account?</p>
                    <Link to='/login'><p>Login</p></Link>
                </div>
            </form>
        </div>
    );
};

export default Register;