import React from 'react';
import './Home.css';
import Herobanner from '../images/illustration-2.png';

function About() {
  return (
    <>
    {/* Welcome */}
    <section className="pt-4 pt-md-11">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 col-lg-6 order-md-2">
            <img src={Herobanner} className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate" alt={Herobanner} data-aos="fade-up" data-aos-delay="100" />

          </div>
          <div className="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate" data-aos="fade-up">

            <h1 className="display-3 text-center text-md-start">
              Welcome to <span className="text-primary">About Us</span>. <br/>
              Develop anything.
            </h1>

            <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8">
              Build a beautiful, modern website with flexible Bootstrap components built from scratch.
            </p>

            <div className="text-center text-md-start">
              <a href="/" className="btn btn-primary shadow lift me-1">
                View all pages <i className="fe fe-arrow-right d-none d-md-inline ms-3"></i>
              </a>
              <a href="/" className="btn btn-primary-soft lift">
                Documentation
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About