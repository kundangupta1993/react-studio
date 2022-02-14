import React from 'react'
import './Home.css';

function NotFound() {
  return (
    <>
    <section className="pt-4 pt-md-11">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-12 col-lg-12 order-md-1 aos-init aos-animate" data-aos="fade-up">

            <h1 className="display-3 text-center text-md-start">
              Page Not Found <span className="text-primary">404</span>!!
            </h1>

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default NotFound