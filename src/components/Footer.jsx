import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='container'>   
<div  style={{backgroundColor:'#fff'}}className="row footer pt-5 pb-5">
          <div className="col col-12 col-md-5  d-flex justify-content-center align-items-center">
            <div className="fPicture">
              
            </div>

          </div>
          <div className="col col-12 col-md-7 d-flex flex-row justify-content-between pt-5 ps-5 pt-md-0 ps-md-0 pe-5">

            <div className="fContent">
              <a href="/" style={{textDecoration:'none'}}>
              <h1 className='footerLogo'>Dealerz.</h1>
              </a>
              <p><a href="#pp">Privacy Policy</a></p>
              <p><a href="#t&c">Terms and Condition</a></p>

              <p className='cRight'>@2020 TanahAir Studio. All rights reserved.</p>
            </div>

            <div className="fLogos">

              <a href="#youtube"><i class="fa-brands fa-youtube brand"></i></a>
              <a href="#facebook"><i class="fa-brands fa-facebook brand"></i></a>
              <a href="#twitter"><i class="fa-brands fa-twitter brand"></i></a>
              <a href="#instagram"><i class="fa-brands fa-instagram brand"></i></a>

            </div>

          </div>

        </div>
      
    </div>
  )
}

export default Footer
