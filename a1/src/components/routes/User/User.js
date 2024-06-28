// src/components/routes/User/User.js

import React from "react";
import './User.css';
import Header from "../Landing/Header/Header" ;
import Footer from "../Landing/Footer/Footer";
import LowerFooter from "../Landing/LowerFooter/LowerFooter";

const User = () =>{

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return(
        <div>
            <Header />

            <section  className="ui-super-container"> 
                
                <div className="ui-super-left">
                    <div className="ui-super-content">
                        <div className="two-headings">
                            <h1 className="two-heading-1 tt-111">
                                TRANSFORMING UI/UX
                            </h1>
                            <h2 className="two-heading-2 tt-222">
                                Elevating User Experiences with Intuitive Design
                            </h2>
                        </div>
                    </div>
                </div>
                
                <div className="ui-super-right">
                    <img 
                        src='./uploads/com-4.webp'
                        className='ui-super-bg'
                        alt="ui-super-bg"
                    />
                </div>

            </section>

            <section className="ui-ph-fr-container">
                <img 
                    src="./uploads/com-11.webp"
                    className="ui-ph-bg"
                    alt="ui-ph-bg"
                />
                <div className="ui-para">
                    <p>
                        At Communiaide, we excel in creating intuitive UI/UX designs that captivate users and drive business growth. Explore how our expertise can revolutionize your digital presence for unparalleled user satisfaction and success.
                    </p>
                    <button 
                        type="button" 
                        className="btn btn-light explore_btn"
                        onClick={() => scrollToSection('footer')}>
                            CONTACT US
                    </button>
                </div>
                
            </section>


            <Footer/>
            <LowerFooter />
        </div>

    );
};

export default User;