// src/components/routes/Landing/First/First.js


import React from 'react';
import { Link } from 'react-router-dom';
import './First.css';
import SliderContainer from '../Slider/SliderContainer';

const First = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>

            
            {/* **********SUPER SECTION************* */}

            <section className='super-container'>
                    <img 
                    src="/uploads/com-1.webp"
                    className='super-img'
                    alt="Super Background Image"
                    />
                <div className='super-container-content'>
                    <div className='super-container-line1'>
                        Reimagine Your Brand's Future
                    </div>
                    <div className='super-container-line2'>
                        Transforming Ideas into Impactful Experiences with Innovative Storytelling and Strategic Creativity.
                    </div>
                    
                    <div  className='super-container-btns'>
                        <button type="button" className="btn btn-info explore_btn" 
                            onClick={() => scrollToSection('categories-container')}>EXPLORE PROJECT
                        </button>
                        <button type="button" className="btn btn-light contact_btn"
                            onClick={() => scrollToSection('footer-sect')}>CONTACT US
                        </button>
                    </div>

                    <div className='super-container-satisfied'>
                        500+ Satisfied Clients
                    </div>
                </div>

            </section>


            {/* **********WHO WE ARE************* */}

            <section className='about-container'>
                <div className='about-content'>

                    <div className='headings animate-on-scroll'>
                        <div className='heading-1'>OUR IDENTITY</div>
                        <div className='heading-2'>Who We Are</div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10">
                            <div className="card border-0 about-card">
                                <div className="card-body">
                                    <p className="card-text">
                                        At Communiaide, we ignite growth and transformation for brands by seamlessly merging language and visuals. With a holistic approach and a willingness to take strategic risks, we dive deep into consumer insights to craft bespoke strategies that elevate brands to new heights, ensuring lasting success.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ********HOW WE WORK************** */}

            <section className='work-container'>

                <div className='headings'>
                    <div className='heading-1'>OUR PROCESS</div>
                    <div className='heading-2'>How We Work</div>
                </div>

                <div className='work-work'>
                    <img 
                        src="./uploads/com-2.webp" 
                        className="work-bg" 
                        alt="work-bg" 
                    />
                    <div className='work-cards'>
                        <div className='work-card-1 work-card'>
                            <div className='work-card-heading'>Innovative Thinking</div>
                            <p>We challenge norms to create unique, impactful brand experiences.</p>
                        </div>
                        <div className='work-card-2 work-card'>
                            <div className='work-card-heading'>Collaborative Approach</div>
                            <p>We partner closely with clients to tailor strategies and campaigns.</p>
                        </div>
                        <div className='work-card-3 work-card'>
                            <div className='work-card-heading'>Holistic Execution</div>
                            <p>We manage the entire creative process for seamless, high-quality results.</p>
                        </div>
                    </div>
                </div>

            </section>

            
            {/* **********CATEGORIES************* */}

            <section id="categories-container" className='categories-container'>
                
                <div className='headings'>
                    <div className='heading-1'>EXPLORE</div>
                    <div className='heading-2'>Our Categories</div>
                </div>

                <div className='categories-cards'>
                    <div className='categories-sub-cards'>
                        <span className='category-card'>
                            <Link to="/digital-marketing" onClick={scrollToTop}>
                                <img 
                                    src='./uploads/com-3.webp'
                                    className='categories-card-1'
                                    alt="categories-card-1"
                                />
                                <div className='overlay'>
                                    <div className='text'>Explore Digital Marketing</div>
                                </div>
                            </Link>
                        </span>

                        <span className='category-card'>
                        <Link to="/ui-ux" onClick={scrollToTop}>
                                <img 
                                    src='./uploads/com-4.webp'
                                    className='categories-card-2'
                                    alt="categories-card-2"
                                />
                                <div className='overlay'>
                                    <div className='text'>Explore UI/UX</div>
                                </div>
                            </Link>
                        </span>
                    </div>
                    <div className='categories-sub-cards'>
                        <span className='category-card'>
                            <Link to="/advertisement" onClick={scrollToTop}>
                                <img 
                                    src='./uploads/com-5.webp'
                                    className='categories-card-1'
                                    alt="categories-card-3"
                                />
                                <div className='overlay'>
                                    <div className='text'>Explore Advertisement Shoot</div>
                                </div>
                            </Link>
                        </span>
                        <span className='category-card'>
                            <Link to="/branding" onClick={scrollToTop}>
                                <img 
                                    src='./uploads/com-6.webp'
                                    className='categories-card-2'
                                    alt="categories-card-4"
                                />
                                <div className='overlay'>
                                    <div className='text'>Explore Brand Strategy</div>
                                </div>
                            </Link>
                        </span>
                    </div>
                </div>
                
            </section>


            {/* *******VIDEOS******* */}


            <section className="video-container" >
                
                <div className='headings'>
                    <div className='heading-1'>TRENDING</div>
                    <div className='heading-2'>Top Collection</div>
                </div>

                <div className="video-half-container">
                    <div className="video-half">
                        <iframe 
                            src="https://www.youtube.com/embed/_8K0ZcDRgIQ" 
                            title="YouTube first" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="video-half">
                        <iframe 
                            src="https://www.youtube.com/embed/x5TfnpNvVzw" 
                            title="YouTube second" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
                <div className="video-full">
                    <iframe 
                        src="https://www.youtube.com/embed/smlUn4wNBTU" 
                        title="YouTube third" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="video-half-container">
                    <div className="video-half">
                        <iframe 
                            src="https://www.youtube.com/embed/0pxJN8mvQ5Q"  
                            title="YouTube forth" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="video-half">
                        <iframe 
                            src="https://www.youtube.com/embed/06MPRx9rjcs" 
                            title="YouTube fifth" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </section>

            {/* *******TEAM******** */}

            <section className='team-container'>
                
                <div className='headings'>
                    <div className='heading-1 t-h1'>TEAM</div>
                    <div className='heading-2 t-h2'>Our People</div>
                </div>

                <div className='team-members'>
                    <span className='team-member'>
                        <img 
                            src="./uploads/com-7.webp"
                            className='member-1 memb'
                            alt='member-1'
                        />
                        <div className='overlayy'>
                            <div className='text'>Name</div>
                        </div>
                    </span>
                    <span className='team-member'>
                        <img 
                            src="./uploads/com-8.webp"
                            className='member-2 memb'
                            alt='member-2'
                        />
                        <div className='overlayy'>
                            <div className='text'>Name</div>
                        </div>
                    </span>
                    <span className='team-member'>
                        <img 
                            src="./uploads/com-9.webp"
                            className='member-3 memb'
                            alt='member-3'
                        />
                        <div className='overlayy'>
                            <div className='text'>Name</div>
                        </div>
                    </span>
                    <span className='team-member'>
                        <img 
                            src="./uploads/com-10.webp"
                            className='member-4 memb'
                            alt='member-4'
                        />
                        <div className='overlayy'>
                            <div className='text'>Name</div>
                        </div>
                    </span>
                </div>


            </section>




            {/* *************** */}

            <section className='clients-container'>
                <SliderContainer />   
            </section>            

        </div>
        
    );
};

export default First;
