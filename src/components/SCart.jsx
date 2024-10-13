import React from 'react'
import './SCart.css'
import blackLeatherJacket from '../assets/images/leatherJacket.jpeg'

function SCart() {
    
  return (
<div className="bg-light" style={{paddingTop:'80px', paddingBottom:'80px'}}>
<div className="container cart">
    <div className="d-flex flex-row flex-wrap mb-4 sCartHeader">
        <a href="#shoppingcart"> 1.Shopping Cart </a>
        <a href="#checkout"> 2.Checkout </a>
        <a href="#checkout"> 3.Order Succeed </a>

    </div>

    <h2 className='mb-4' style={{fontWeight:'600'}}>
        My Cart
    </h2>

  <div className="row">
    <div className="col col-12 col-md-6">
    <div className="cartCardContainer d-flex flex-column justify-content-center pb-3">
        <div className="cartCard d-flex flex-row w-100 flex-wrap ">
            <div className="cartCardImage  p-2">
                    <img src={blackLeatherJacket} alt="black-leather-jacket" />
            </div>

            <div className="cartCardContent d-flex flex-column justify-content-center p-2 ps-3 pe-5 pb-0 w-100 ">
                <h5>Tropical Playsuit</h5>
                <div className='w-75 d-flex justify-content-between mb-1'>
                    <span className='pDetails'>Size  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;:</span>
                    <span className='fw-bold'>M</span>
                </div>
                
                <div className='w-75 d-flex justify-content-between '>
                    <span className='pDetails'>Quantity&nbsp;&nbsp;&nbsp;&nbsp;:</span>
                    <span>   <button  className='btn fw-bolder'>-</button>
                          <input value="5" className='fw-bolder ps-3  ms-1 bg-light border-0' style={{width:'50px'}} type="text" readOnly/>
                          <button  className='btn fw-bolder pe-0 '>+</button></span>
                </div>

                <div className="w-100 d-flex justify-content-between align-items-center ps-2 pe-4 pt-1">
                    <h2 className='pAmount mb-0'>$99</h2>

                   <div className='cartCardButtons'>
                   <button className='btn btn-sm me-2'><i class="fa-solid fa-trash "></i></button>

                   <button  className=' btn btn-sm'>
                        Wishlist<i class="fa-regular fa-heart ms-2"></i>
                    </button>
                   </div>

                  
                </div>
            </div>


        </div>


    </div>
    </div>

    <div className="col col-12 col-md-6">
        <div className="py-4 px-5 d-flex flex-column bg-white coupon">
            <h5 className='mb-3 '>
            Have a Coupon?
            </h5>

            <div class="form-floating mb-3 ">
<input type="text" className="form-control border-rounded " id="floatingInput" placeholder="Input your email here"/>
<label for="floatingInput">Email address</label>
</div>

          <div className='mt-1'>
          <div style={{backgroundColor:'#F86338'}} className="btn text-light applyBtn">
            Apply
          </div>
          </div>

        </div>


        <div className="container mt-5">
            <div className="row p-2  cardTable">
                <h5 className='p-0 mb-3'>Card Totals</h5>
                  <table>
                    <tr>
                        <th>Subtotal</th>
                        <td>$150</td>
                    </tr>

                    <tr>
                        <th>Subtotal</th>
                        <td>$150</td>
                    </tr>

                    <tr>
                        <th>Shipping</th>
                        <td>Free Shipping</td>
                    </tr>

                    <tr>
                        <th></th>
                        <td>Shipping to Sidney</td>
                        <td><a href="#change" className='changeLink'>Change</a></td>
                    </tr>

                    <tr>
                        <th>Total</th>
                        <td style={{fontWeight:'600'}}>$350</td>
                    </tr>
                  </table>
            </div>
        </div>
    </div>
  </div>

    </div> 
</div>
  )
}

export default SCart
