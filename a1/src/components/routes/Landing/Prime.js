// src/components/routes/Landing/Prime.js

import React from 'react';
// import Header from './Header/Header';
import First from './First/First';
import Footer from './Footer/Footer';
import LowerFooter from './LowerFooter/LowerFooter';
import { Link } from 'react-router-dom';

import './Prime.css'

export default function Prime(){

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className='main-page'>
                {/* <Header /> */}
                <First />
                <Footer />
                
                <Link to="/terms" className="btn btn-primary button-h" rel="noopener noreferrer" onClick={scrollToTop}>Check our Terms & Conditions</Link>

                <LowerFooter />
        </div>
    );
}