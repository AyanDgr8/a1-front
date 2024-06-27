// src/components/routes/Landing/SliderContainer/SliderContainer.js


import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderContainer.css';


const SliderContainer = () => {

    const machineImages =[
        "/uploads/comm-1.jpg",
        "/uploads/comm-2.jpg",
        "/uploads/comm-3.jpg",
        "/uploads/comm-4.jpg",
        "/uploads/comm-5.jpg",
        "/uploads/comm-6.jpg",

    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: window.innerWidth <= 900 ? 1 : 4, // Show 1 slide on mobile, 3 slides otherwise
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
    };

    return(
        <div className='SliderContainer-container'>
            
                
            <div className='headings sl-heading'>
                <div className='heading-1'>PARTNERS</div>
                <div className='heading-2'>Our Clients</div>
            </div>
            
            <Slider {...sliderSettings} className='machines-slider'>
                {machineImages.map((image, index) => ( 
                <div key={index} className="slide">
                    <img src={image} alt={`Brands ${index + 1}`} /> 
                </div>
                ))}
            </Slider>
        </div>
    )
}

export default SliderContainer;