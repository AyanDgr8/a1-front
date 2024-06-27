// // src/components/routes/LandingPage/Footer/Footer.js

import  React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return(
        <div>
            <section className='footer-container'>

                <div className='footer-content-first'>
                    <Link to="/" className="navbar-brand" onClick={scrollToTop}>
                        <img 
                            src="./uploads/com-logo.ico" 
                            className="footer-logo" 
                            alt="brand" 
                        />
                    </Link>
                </div>

                <div className='footer-content-second'>
                    <div className='deets'>
                        <a href='tel:+91 9899-967-927' className='cont-links'>+91 9899967927</a>
                    </div>
                    <div className='deets'>
                        <a href='mailto:hellan.dheeraj@gmail.com' className='cont-links'>hellan.dheeraj@gmail.com</a>
                    </div>
                    <div className='deets'>
                        <a href="https://www.google.com/maps/place/28%C2%B027'26.6%22N+77%C2%B004'47.8%22E/@28.4573969,77.0773717,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.4573969!4d77.0799466?entry=ttu" className='cont-links'>165 Block C, Sushant Lok Phase I, Sector 43, Gurugram, Haryana 122002</a>
                    </div>
                </div>

                <div className='footer-content-third'>
                    <div className='social-links'>
                        
                        <Link to="/" rel="noopener noreferrer" onClick={scrollToTop}>
                            <img src="./uploads/linkedin.svg" alt="LinkedIn" className="social-icon" />
                        </Link>
                        
                        <Link to="/" rel="noopener noreferrer" onClick={scrollToTop}>
                            <img src="./uploads/facebook.svg" alt="Facebook" className="social-icon" />
                        </Link>

                        <Link to="/" rel="noopener noreferrer" onClick={scrollToTop}>
                            <img src="./uploads/twitter.svg" alt="Twitter" className="social-icon" />
                        </Link>

                        <Link to="/" rel="noopener noreferrer" onClick={scrollToTop}>
                            <img src="./uploads/instagram.svg" alt="Instagram" className="social-icon" />
                        </Link>

                    </div>

                    <Link to="/terms" className="btn btn-primary button-h" rel="noopener noreferrer" onClick={scrollToTop}>Terms & Conditions</Link>
                
                </div>

                
                
            </section>
        </div>

    )
}

export default Footer;