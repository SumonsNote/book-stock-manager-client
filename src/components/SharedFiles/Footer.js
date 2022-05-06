import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='bg-dark text-white py-3 fixed-bottom'>
            <div className='container py-3 d-flex justify-content-between align-items-center'>
                <h2 className='footer-font'>Stay Connected with us</h2>
                <div>
                    <FontAwesomeIcon className='me-2 fs-5' icon={faFacebook} />
                    <FontAwesomeIcon className='me-2 fs-5' icon={faLinkedin} />
                    <FontAwesomeIcon className='me-2 fs-5' icon={faTwitter} />
                    <FontAwesomeIcon className='me-2 fs-5' icon={faGithub} />
                </div>
            </div>
        </div>
    );
};

export default Footer;