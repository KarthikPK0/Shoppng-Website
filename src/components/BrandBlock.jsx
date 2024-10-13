import React from 'react'
import './BrandBlock.css'
import happyCustomers from '../assets/images/happyCustomers.jpg'

function BrandBlock() {
  return (
    <div className='bg-light'>
         <div className="container ">
         <div className="row s4  py-5 ">
        <div className="col col-12 col-md-6 col-lg-6 p-3 d-flex align-items-center justify-content-end">
          <div className="s3c1-img p-5 p-md-0">
            <img className='img-fluid' style={{ maxWidth: '100%', height: 'auto' }} src={happyCustomers} alt="happy-customers" />
          </div>
        </div>

        <div className="col col-12 col-md-6 col-lg-6 p-5 pt-0 .emailForm p-md-3 p-lg-3 d-flex flex-column ">
          <h1 className="pt-5 text-start fw-bold">
            Story about <br />
            Our Brand
          </h1>
          <p className="pt-2 text-start pb-4 pr-3 pr-md-5">
            Develop a website by finding a product identity that has value and <br /> branding to become a characteristic of a company. We will also <br /> facilitate the business marketing of these products with our SEO <br /> experts so that they become a ready-to-use website and help sell <br /> a product from the company Develop a website by finding a <br /> product identity that has value and branding to become a <br /> characteristic of a company. We will also facilitate the business <br /> marketing of these products with our SEO experts so that they <br />become a ready-to-use website and help sell a product from the <br /> company
          </p>

          <span style={{ color: '#F86338' }}>
            <a className='readStory' href="#">Read full story</a>
          </span>
        </div>
      </div>
         </div>
      
    </div>
  )
}

export default BrandBlock
