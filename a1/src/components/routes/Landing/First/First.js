// src/components/routes/Landing/First/First.js


import React from 'react';
import './First.css';
import SliderContainer from '../Slider/SliderContainer';

const First = () => {
    return (
        <div>

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



            {/* *********************** */}

            <section className='services-cards' >
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
                                        <p className="card-text">Develop bespoke strategies that resonate with your audience and elevate your brand above the competition.</p>
                                        <a href="">
                                            <button className="btn btn-primary btns">Get Started</button>
                                        </a>
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
                                        <h5 className="card-title">Digital Market</h5>
                                        <p className="card-text">Leverage cutting-edge digital marketing techniques to captivate your audience and drive growth across all platforms.</p>
                                        <a href="">
                                            <button className="btn btn-primary btns">Get Started</button>
                                        </a>
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
                                        <p className="card-text">Produce engaging and visually stunning content that tells your brand's story and leaves a lasting impression.</p>
                                        <a href="">
                                            <button className="btn btn-primary btns">Start Now</button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
            </section>


            {/* ********************** */}

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
                                    We begin by diving deep into your brand's identity
                                    and market to uncover valuable insights. Using this 
                                    information, we develop a comprehensive strategy that
                                    aligns with your business goals and objectives.

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
                                    Our team of creative experts collaborates to 
                                    produce innovative concepts, designs, and content 
                                    that reflectyour brand's essenc. We then implement 
                                    these strategies across all chosen platforms, 
                                    ensuring seamless execution.
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
                                    We continuously monitor performance metrics and gather 
                                    feedback post-launch, optimizing our strategies to ensure 
                                    your brand continues to grow and adapt in an ever-evolving market.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>



            {/* ********************** */}


            <section className="video-container" >
                <div className="video-full">
                    <iframe 
                        src="https://www.youtube.com/embed/smlUn4wNBTU" 
                        title="YouTube first" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="video-half-container">
                    <div className="video-half">
                        <iframe 
                            src="https://www.youtube.com/embed/Hmku0HzNZ6c" 
                            title="YouTube second" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="video-half">
                        <iframe 
                            src="https://www.youtube.com/embed/G6dUrUZyybU" 
                            title="YouTube third" 
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


            {/* *****Contact****** */}

            <section className='footer-conatiner'>
                <div className='cont-heading'>Contact</div>
                <div className='deets'>
                    Phone : <a href='tel:+91 9899-967-927' className='cont-links'>+91 9899967927</a>
                </div>
                <div className='deets'>
                    Email : <a href='mailto:hellan.dheeraj@gmail.com' className='cont-links'>hellan.dheeraj@gmail.com</a>
                </div>

            </section>


            

        </div>
        
    );
};

export default First;
