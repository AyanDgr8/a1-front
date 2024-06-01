// src/components/routes/Landing/First/First.js


import React from 'react';
import './First.css';
import SliderContainer from '../Slider/SliderContainer';

const First = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div>

            
            {/* **********SUPER SECTION************* */}

            <section className='super-container'>
                    <img 
                    src="/uploads/comm-two.jpg"
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
                </div>

            </section>


            {/* **********WHO WE ARE************* */}

            <section className='about-container'>
                <img 
                    src="./uploads/about-bg.jpg" 
                    className="about-bg" 
                    alt="about-bg" 
                />
                <div className='about-content'>
                    <div className='about-heading'>Who We Are</div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8">
                            <div className="card border-0 about-card">
                                <div className="card-body">
                                    <p className="card-text">
                                        At Communiaide, we ignite growth and transformation for brands by seamlessly merging language and visuals. <br></br>
                                        With a holistic approach and a willingness to take strategic risks, we dive deep into consumer insights, crafting bespoke strategies that elevate brands to new heights, ensuring lasting success. <br></br>
                                        Our specialization in brand strategies, digital marketing, and content creation allows us to streamline processes for maximum efficiency.
                                        Trust us to captivate audiences across all media formats, from traditional to digital platforms, delivering impactful and engaging experiences.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ********HOW WE WORK************** */}

            <section className='work-cards'>
                <div className='work-heading'>How We Work</div>

                <div className='work-containers'>

                    <div className='work-container w-1'>
                        <div className='work-card-left'>
                            <img 
                                src="/uploads/work-one.jpg"
                                className="work-imgs w-1-img"
                                alt="work-imgs-1"
                            />
                        </div>
                        <div className='work-card-right'>
                            <div className='card-cont'>
                                <div className='work-title'>Discovery & Strategic Planning</div>
                                <div className='work-text'>
                                Are you on a quest for an advertising agency that questions, imagines, 
                                and throws away the box because they could never think inside it? 
                                Then Communiaide's ability to re-imagine realities for the brand and 
                                restructure it into impactful experiences is the answer for you. 
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='work-container w-2'>
                        <div className='work-card-left'>
                            <img 
                                src="/uploads/work-two.jpg"
                                className="work-imgs"
                                alt="work-imgs-2"
                            />
                        </div>
                        <div className='work-card-right'>
                            <div className='card-cont'>
                                <div className='work-title'>Creative Development & Execution</div>
                                <div className='work-text'>
                                    Our ensemble of passionate Creative Directors, Art Directors, Copywriters, 
                                    Film Directors, Cinematographers, Production Designers, Sound Designers, VFX Editors, 
                                    Content Strategists, UX Designers, AI Specialists, and Digital Marketing Managers 
                                    are constantly revolutionizing storytelling and finding innovative ways to captivate audiences.
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='work-container w-3'>
                        <div className='work-card-left'><img 
                                src="/uploads/work-three.jpg"
                                className="work-imgs"
                                alt="work-imgs-3"
                            />
                        </div>
                        <div className='work-card-right'>
                            <div className='card-cont'>
                                <div className='work-title'>Analysis & Growth Optimization</div>
                                <div className='work-text'>
                                    With each project we take on, we strive to create a dynamic branding solution 
                                    that captures their essence and holds an emotional value to transform their tomorrow. 
                                    We continuously monitor performance metrics and gather feedback post-launch, 
                                    optimizing our strategies to ensure your brand continues to grow and adapt 
                                    in an ever-evolving market.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* **********SERVICES************* */}

            <section className='services-cards'>
                <img 
                    src="./uploads/services-bg.jpg" 
                    className="services-bg" 
                    alt="services-bg" 
                />
                <div className='services-content'>
                    <div className='services-heading'>Our Services</div>
                    <div className="row d-flex justify-content-center">
                        <div className="row row-cols-1 row-cols-md-3 g-4">

                            <div className="col cardddd">
                                <div className="card border border-0 cardd">
                                    <img 
                                        src="./uploads/service-one.jpg" 
                                        className="position-relative top-0 start-50 translate-middle img-icon" 
                                        alt="service-icon"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Brand Strategy</h5>
                                        <p className="card-text">
                                            Develop bespoke strategies that resonate with your audience and elevate your brand above the competition.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col cardddd">
                                <div className="card border border-0 cardd">
                                    <img 
                                        src="./uploads/service-two.jpg" 
                                        className="position-relative top-0 start-50 translate-middle img-icon" 
                                        alt="service-icon"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Digital Marketing</h5>
                                        <p className="card-text">
                                            Leverage cutting-edge digital marketing techniques to captivate your audience and drive growth across all platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col cardddd">
                                <div className="card border border-0 cardd">
                                    <img 
                                        src="./uploads/service-three.jpg"
                                        className="position-relative top-0 start-50 translate-middle img-icon" 
                                        alt="service-icon"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Content Creation</h5>
                                        <p className="card-text">
                                            Produce engaging and visually stunning content that tells your brand's story and leaves a lasting impression.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col cardddd">
                                <div className="card border border-0 cardd">
                                    <img 
                                        src="./uploads/service-four.jpg"
                                        className="position-relative top-0 start-50 translate-middle img-icon" 
                                        alt="service-icon"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Community Building</h5>
                                        <p className="card-text">
                                            Expand your reach and foster lasting relationships with your audience through strategic community building.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col cardddd">
                                <div className="card border border-0 cardd">
                                    <img 
                                        src="./uploads/service-six.jpg"
                                        className="position-relative top-0 start-50 translate-middle img-icon" 
                                        alt="service-icon"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">SEO & Content Marketing</h5>
                                        <p className="card-text">
                                            Improve your search engine rankings and create compelling content that drives traffic and engagement.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col cardddd">
                                <div className="card border border-0 cardd">
                                    <img 
                                        src="./uploads/service-seven.jpg"
                                        className="position-relative top-0 start-50 translate-middle img-icon" 
                                        alt="service-icon"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">Email Campaigns</h5>
                                        <p className="card-text">
                                            Build lasting relationships with targeted email campaigns that keep your customers engaged and informed.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



            {/* ********************** */}


            <section className="video-container" >
                <div className="video-heading">Our Work</div>
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

            {/* *************** */}

            <section className='clients-container'>
                <SliderContainer />   
            </section>            

        </div>
        
    );
};

export default First;
