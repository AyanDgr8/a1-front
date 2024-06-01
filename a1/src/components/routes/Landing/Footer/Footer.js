// // src/components/routes/LandingPage/Footer/Footer.js

import  React from 'react';
import './Footer.css';

const Footer = () => {

    return(
        <div>
            <section className='footer-container'>

                <div className='cont-heading'>Contact Details</div>
                <div className='cont-subheading'>Ready to dive into the digital realm and create something extraordinary? Let's connect and make our mark!</div>
                <div className='deets'>
                    Phone : <a href='tel:+91 9899-967-927' className='cont-links'>+91 9899967927</a>
                </div>
                <div className='deets'>
                    Email : <a href='mailto:hellan.dheeraj@gmail.com' className='cont-links'>hellan.dheeraj@gmail.com</a>
                </div>
                <div className='deetss'>
                    Address : <a href="https://www.google.com/maps/place/28%C2%B027'26.6%22N+77%C2%B004'47.8%22E/@28.4573969,77.0773717,17z/data=!3m1!4b1!4m4!3m3!8m2!3d28.4573969!4d77.0799466?entry=ttu" className='cont-links'>165 Block C, Sushant Lok Phase I, Sector 43, Gurugram, Haryana 122002</a>
                </div>
            </section>
        </div>

    )
}

export default Footer;