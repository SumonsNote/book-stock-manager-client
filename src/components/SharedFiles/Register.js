import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from './Loading';
import SocialLogin from './SocialLogin';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      let from = location.state?.from?.pathname || "/";



      const handleRegister = e => {
            e.preventDefault()
            const email = e.target.email.value;
            const password = e.target.password.value
            const confirmPassword = e.target.confirmPassword.value
            createUserWithEmailAndPassword(email, password, confirmPassword)

            if (password !== confirmPassword) {
                toast.error('Password did not match')
                return;
            }
            if (email === '' || email === undefined) {
                toast.error('Please enter an Email!');
                return;
            }
            if (password === '' || password === undefined) {
                toast.error('Please enter your Password!');
                return;
            }
            if (confirmPassword === '' || confirmPassword === undefined) {
                toast.error('Please enter your Password!');
                return;
            }
      }

    if (user) {
        navigate(from, { replace: true });
    }
      if(loading) {
        return <Loading></Loading>
    }
    
    return (
        <div style={{marginBottom: "62px"}}>
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
                <div className="mb-3">
                    <label for="exampleInputPassword2" className="form-label">Confirm password</label>
                    <input type="password" name='confirmPassword' className="form-control" id="exampleInputPassword2" />
                </div>
                <button type="submit" className="btn btn-primary">Create Account</button>
                <div className='d-flex justify-content-between py-5'>
                    <p>Already have an account?</p>
                    <Link to='/login'><p>Login</p></Link>
                </div>
                <SocialLogin></SocialLogin><Toaster></Toaster>
            </form>
            
        </div>
    );
};

export default Register;