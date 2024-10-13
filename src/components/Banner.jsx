import React from 'react'
import './Banner.css'


function Banner({heading, imgSrc, showButton}) {
  return (
    <div className='container pb-0  '>
  
      <div className="row s1">
        <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
          <div className='p-5'>
            <img className='img-fluid' src={imgSrc} alt="banner-image" />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 p-3 d-flex flex-column justify-content-center  ps-5 ps-md-0">
       
          <h1 className='mb-3 fw-bold' dangerouslySetInnerHTML={{ __html: heading }} />
          <p className='pb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        {
          showButton && (  <div>
            <button className="btn text-light findMoreBtn ">Find out More</button>
          </div>)
        }
        </div>
      </div>
      
    </div>
  )
}

export default Banner
