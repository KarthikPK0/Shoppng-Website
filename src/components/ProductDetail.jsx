import React from 'react'
import './ProductDetail.css'
import blackLeatherJacket from '../assets/images/leatherJacket.jpeg'

function ProductDetail() {
  return (
    <>
   <div className='container d-flex flex-row  py-4 itemDetails'>
   <h5 >
        Grocery{'>'}
    </h5>

    <h5 >
    Fruites{'>'}
    </h5>

    <h5 >
    Japan Oranges
    </h5>
   </div>

   <div className="container">
    <div className="row" >
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
           <div className="gridContainer ">
            <div className="item item-1">
              <img src="https://m.media-amazon.com/images/I/719qPEAMCLL._SX679_.jpg" alt="" className='img-fluid' style={{maxWidth:'100%', height:'auto'}} />
            </div>
            <div className="item item-2">
            <img src=" https://m.media-amazon.com/images/I/71ct+d7sNZL._SY741_.jpg" alt="" className='img-fluid' style={{maxWidth:'100%', height:'100%', objectFit: 'fill'}} /></div>
            <div className="item item-3">
            <img src="https://m.media-amazon.com/images/I/81R-rgpFBXL._SY741_.jpg" alt="" className='img-fluid' style={{maxWidth:'100%', height:'100%', objectFit: 'fill'}} /></div>

            <div className="item item-4">
            <img src="https://m.media-amazon.com/images/I/717+yS65dgL._SY741_.jpg" alt="" className='img-fluid' style={{maxWidth:'100%', height:'100%', objectFit: 'fill'}} /></div>
           </div>
        </div>
        
        <div className="col-12 col-md-6">
            <h1 className='mb-3 mt-4 mt-md-0'>
            Urbano Jacket
            </h1>
            <div className="rating d-flex flex-row mb-3 ">
          
    <i class="fa-solid fa-star " style={{marginRight:'5px', fontSize:'20px'}}></i>
    <i class="fa-solid fa-star " style={{marginRight:'5px', fontSize:'20px'}}></i>
    <i class="fa-solid fa-star " style={{marginRight:'5px', fontSize:'20px'}}></i>
    <i class="fa-solid fa-star " style={{marginRight:'5px', fontSize:'20px'}}></i>
    <i class="fa-solid fa-star " style={{marginRight:'5px', fontSize:'20px'}}></i>
 
  
            </div>

            <h1  style={{color:'#F86338', fontWeight:'600'}} className='mb-3'>
              $99
            </h1>
            <h5 style={{fontWeight:'600'}}>Details Product</h5>

            <p className='productDetails  pe-0 pe-md-5'>
            Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company.

            </p>

            <p className='mb-4 productDetails p-0 pe-md-5'>
            Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company.
            </p>

            <div className='d-flex justify-content-between '>
                    <span style={{fontWeight:'600'}}>Quantity</span>
                    <span>   <button  className='btn fw-bolder'>-</button>
                          <input value="5" className='fw-bolder ps-3  ms-1 bg-white border-0' style={{width:'50px'}} type="text" readOnly/>
                          <button  className='btn fw-bolder pe-0 '>+</button></span>

                          <a className='addNoteLink' href="#addNote">
                          Add note
                          </a>
                </div>

                <div className="d-flex justify-content-between mb-4">
                  <span style={{fontWeight:'600'}}>Sub Total</span>
                  <span style={{fontWeight:'600'}}>
                    $10
                  </span>
                </div>

                <div>
              
                   <div className=' btn wishlistButton me-3' style={{color:'#F86338', border:'1px solid #F86338'}}>
                        Wishlist<i class="fa-regular fa-heart ms-2"></i>
                    </div>

                    <div className=' btn addToCartButton text-light' style={{backgroundColor:'#F86338', border:'1px solid #F86338'}}>
                        Add To Cart<i class="fa-solid fa-cart-shopping ms-2"></i>
                    </div>
                   </div>

        </div>
    </div>
   </div>

   <div className="container" style={{paddingTop:'60px'}}>
    <div className="row">

    <div className="col-12 col-md-6">
 <div className="description mb-5">
 <h3 className='mb-3' style={{fontWeight:'500'}}>Description</h3>
<p className='productDescription pe-0 pe-md-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</p>

<p className='productDescription pe-0 pe-md-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo.</p>
 </div>

<div className="reviews">    
<h3 className='mb-3' style={{fontWeight:'500'}}>Reviews (2)</h3>

<div className="reviewCardContainer d-flex flex-column p-3 ps-0" style={{gap:'15px'}}>
  <div className="reviewCard">
      <div className="row">
        <div className="col-12 col-md-2  p-0">
                  <div className=' container-fluid '>
                  <img className='user-image' src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="user-image" />
                  </div>
        </div>
        <div className="col-12 col-md-10 p-0 ps-3 ps-md-0">
                <div className='d-flex flex-row align-items-center'>
                  <span style={{fontWeight:'600', fontSize:'19px'}} className='me-4 '>
                  Alex Iwobi
                  </span>
                  <div className="userRating d-flex flex-row  ">
                  <i class="fa-solid fa-star me-1 "></i>
                  <i class="fa-solid fa-star me-1"></i>
                  <i class="fa-solid fa-star me-1"></i>
                  <i class="fa-solid fa-star me-1"></i>
                  <i class="fa-solid fa-star me-1"></i>
                  </div>
                </div>

                <p className='text-secondary'>
                2 March 2021 at 06.30 pm
                </p>

                <div className="productImages d-flex flex-row mb-3" style={{gap:'8px'}}>
                  <div className="product-image ">
                <img  src="https://pics.craiyon.com/2023-10-21/b144b4b788a44aca99e73109d029ab97.webp" className='img-fluid product-img' alt="product-image" />
                  </div>

                  <div className="product-image ">
                <img  src="https://pics.craiyon.com/2023-10-21/b144b4b788a44aca99e73109d029ab97.webp" className='img-fluid product-img' alt="product-image" />
                  </div>

                  <div className="product-image ">
                <img  src="https://pics.craiyon.com/2023-10-21/b144b4b788a44aca99e73109d029ab97.webp" className='img-fluid product-img' alt="product-image" />
                  </div>

                  <div className="product-image ">
                <img  src="https://pics.craiyon.com/2023-10-21/b144b4b788a44aca99e73109d029ab97.webp" className='img-fluid product-img' alt="product-image" />
                  </div>

                
                </div>

                <p style={{fontSize:'14px', color:'#555'}}>Thank you for the article that was made, it really provides insight and knowledge that I didn't know before.</p>


                  </div>
      </div>
  </div>

  <div className="reviewCard">
      <div className="row">
        <div className="col-12 col-md-2  p-0">
                  <div className=' container-fluid '>
                  <img className='user-image' src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="user-image" />
                  </div>
        </div>
        <div className="col-12 col-md-10 p-0 ps-3 ps-md-0">
                <div className='d-flex flex-row align-items-center'>
                  <span style={{fontWeight:'600', fontSize:'19px'}} className='me-4 '>
                  Alex Iwobi
                  </span>
                  <div className="userRating d-flex flex-row  ">
                  <i class="fa-solid fa-star me-1 "></i>
                  <i class="fa-solid fa-star me-1"></i>
                  <i class="fa-solid fa-star me-1"></i>
                  <i class="fa-solid fa-star me-1"></i>
                  <i class="fa-solid fa-star me-1"></i>
                  </div>
                </div>

                <p className='text-secondary'>
                2 March 2021 at 06.30 pm
                </p>

                <div className="productImages d-flex flex-row mb-3" style={{gap:'8px'}}>
                  <div className="product-image ">
                <img  src="https://pics.craiyon.com/2023-10-21/b144b4b788a44aca99e73109d029ab97.webp" className='img-fluid product-img' alt="product-image" />
                  </div>

                  <div className="product-image ">
                <img  src="https://pics.craiyon.com/2023-10-21/b144b4b788a44aca99e73109d029ab97.webp" className='img-fluid product-img' alt="product-image" />
                  </div>

                  <div className="product-image ">
                <img  src="https://pics.craiyon.com/2023-10-21/b144b4b788a44aca99e73109d029ab97.webp" className='img-fluid product-img' alt="product-image" />
                  </div>

                  <div className="product-image ">
                <img  src="https://pics.craiyon.com/2023-10-21/b144b4b788a44aca99e73109d029ab97.webp" className='img-fluid product-img' alt="product-image" />
                  </div>

                
                </div>

                <p style={{fontSize:'14px', color:'#555'}}>Thank you for the article that was made, it really provides insight and knowledge that I didn't know before.</p>


                  </div>
      </div>
  </div>


</div>
</div>
        </div>

        <div className="col-12 col-md-6">
        <img src="https://m.media-amazon.com/images/I/71F51Ke3+zL._SY741_.jpg" alt="" className='img-fluid' style={{maxWidth:'100%', height:'100%', objectFit: 'fill'}} />
        </div>
        
       
    </div>
   </div>
      
    </>
  )
}

export default ProductDetail
