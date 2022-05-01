import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../Images/404.png'

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center align-items-center py-5'>
            <img style={{width: '300px', height: '300px', borderRadius: '20px'}} src={notFound} alt=""/>
            <div className='ms-5'>
                <h2>Book Stock Manager</h2>
                <p className='fs-1'>Sorry, this page isn't available</p>
                <Link to='/'><button className='btn btn-warning'>Go back to home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;