import React from 'react'
import './ShopBanner.css'
import shoppingBanner from '../assets/images/shoppingBanner.avif'

function ShopBanner() {
  return (
      <div className='container pb-5 pb-md-0'>
  
      <div className="row s1">
        <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center ">
          <div className='p-5'>
            <img className='img-fluid' src={shoppingBanner} alt="shopping-image" />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 p-3 d-flex flex-column justify-content-center  ps-5 ps-md-0">
          <h1 className='mb-3 fw-bold'>Home Shopping,<br /> Your Choice!</h1>
          <p className='pb-4' style={{fontSize:'13px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {/* <div>
            <button className="btn text-light findMoreBtn ">Find out More</button>
          </div> */}
        </div>
      </div>
      
    </div>
  )
}

export default ShopBanner
