import React from 'react';
import Banner from '../../Images/banner.jpg'
import rokomari from '../../Images/Customers/rokomari.png'
import wafilife from '../../Images/Customers/wafilife.png'
import maktabul from '../../Images/Customers/maktabul.png'
import kalantar from '../../Images/Customers/kalantar.jpg'
import niyamah from '../../Images/Customers/niyamah.png'
import './Home.css'
import Items from './Items';

const Home = () => {
    return (
        <div>
            <img src={Banner} alt=""/>
            <div className='container'>
                <Items></Items>
            </div>
            <div className='container'>
            <div>
                <h2 className='py-5 text-uppercase text-center'>Customers</h2>
                <div className='customers-logo d-flex justify-content-center py-5'>
                    <img src={rokomari} alt=""/>
                    <img src={wafilife} alt=""/>
                    <img src={kalantar} alt=""/>
                    <img src={maktabul} alt=""/>
                    <img src={niyamah} alt=""/>
                </div>
            </div>
            
            <div>
                <h2 className='text-uppercase py-5 text-center'>Features</h2>
                    <div className='d-flex justify-content-center flex-wrap'>
                        <div className='features'>
                            <h2>Fastest Services</h2>
                        </div>
                        <div className='features'>
                            <h2>Authentic Products</h2>
                        </div>
                        <div className='features'>
                            <h2>Cash on Delivery</h2>
                        </div>
                        <div className='features'>
                            <h2>No Question Return policy</h2>
                        </div>
                        <div className='features'>
                            <h2>Delivery worldwide</h2>
                        </div>
                        <div className='features'>
                            <h2>100% customer satisfaction</h2>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Home;