import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <form className='w-25 container py-5'>
        <h2 className='text-center'>Please Register</h2>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
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