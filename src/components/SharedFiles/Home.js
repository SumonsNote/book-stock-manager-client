import React from 'react';
import Banner from '../../Images/banner.jpg'
import rokomari from '../../Images/Customers/rokomari.png'
import wafilife from '../../Images/Customers/wafilife.png'
import maktabul from '../../Images/Customers/maktabul.png'
import kalantar from '../../Images/Customers/kalantar.jpg'
import niyamah from '../../Images/Customers/niyamah.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Home.css'
import Items from './Items';
import { faIntercom } from '@fortawesome/free-brands-svg-icons';
import { faBrain, faEarth, faFaceSmile, faHandSparkles, faPersonCane, faPersonCircleCheck, faQuestion, faThunderstorm, faTruckFast } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div>
            <img src={Banner} alt="" />
            <div className='container'>
                <Items></Items>
            </div>
            <div className='container'>
                <div>
                    <div className='bg bg-primary bg-gradient rounded-3 my-4 text-white w-25 mx-auto'>
                    <h2 className='py-5 text-uppercase text-center'><FontAwesomeIcon style={{fontSize: "100px"}} icon={faIntercom}></FontAwesomeIcon><br/>Customers</h2>
                    </div>


                    <div className='customers-logo d-flex justify-content-center py-5 bg-secondary bg-gradient text-white rounded-3'>
                        <img src={rokomari} alt="" />
                        <img src={wafilife} alt="" />
                        <img src={kalantar} alt="" />
                        <img src={maktabul} alt="" />
                        <img src={niyamah} alt="" />
                    </div>
                </div>

                <div className='py-3'>
                <div className='bg bg-primary bg-gradient rounded-3 my-4 text-white w-25 mx-auto'>
                    <h2 className='py-5 text-uppercase text-center'><FontAwesomeIcon style={{fontSize: "100px"}} icon={faHandSparkles}></FontAwesomeIcon><br/>Features</h2>
                    </div>
                    <div className='d-flex justify-content-center flex-wrap bg bg-secondary text-white rounded-3'>
                        <div className='features rounded-3 text-center'>
                            <h5><FontAwesomeIcon className='fs-1 mb-2' icon={faTruckFast}></FontAwesomeIcon> <br/> Fastest Services</h5>
                        </div>
                        <div className='features rounded-3 text-center'>
                            <h5><FontAwesomeIcon className='fs-1 mb-2' icon={faBrain}></FontAwesomeIcon> <br/> Authentic Products</h5>
                        </div>
                        <div className='features rounded-3 text-center'>
                            <h5><FontAwesomeIcon className='fs-1 mb-2' icon={faPersonCircleCheck}></FontAwesomeIcon> <br/> Cash on Delivery</h5>
                        </div>
                        <div className='features rounded-3 text-center'>
                            <h5><FontAwesomeIcon className='fs-1 mb-2' icon={faQuestion}></FontAwesomeIcon> <br/> No Question Return policy</h5>
                        </div>
                        <div className='features rounded-3 text-center'>
                            <h5><FontAwesomeIcon className='fs-1 mb-2' icon={faEarth}></FontAwesomeIcon> <br/> Delivery worldwide</h5>
                        </div>
                        <div className='features rounded-3 text-center'>
                            <h5><FontAwesomeIcon className='fs-1 mb-2' icon={faFaceSmile}></FontAwesomeIcon> <br/> 100% customer satisfaction</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;