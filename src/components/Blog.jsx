import React from 'react'
import './Blog.css'
import outfit1 from '../assets/images/outfit.avif'


function Blog() {
  return (
    <>
     <div  className="insights bg-light">
         <h2 className='fw-bold'>Get Better Insights <br /> from Our Articles</h2> <span className="seeMore">
         See more
         </span>
            </div>

        <div className="container-fluid bg-light">
           
          <div className="row d-flex justify-content-center align-items-center flex-wrap p-2 gap-4">
            <div className="col-md-6 col-lg-4">
              <div className="card articleCard">
                <img src={outfit1} className="card-img-top img-fluid card-img-no-radius" alt="Outfit" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-head">Best Summer Outfit Style</h5>
                  <p style={{ color: '#555' }} className="m-0 mt-1">14 Feb
                    <ul className='mb-3'><li>Livina Style</li></ul>
                  </p>
                  <p className="card-text" style={{ fontSize: '13px' }}>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <p className="cardFooter">
                    <a href="#Exploremore" className='seeMore'>Explore more</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Duplicate card */}
            <div className="col-md-6 col-lg-4">
              <div className="card articleCard">
                <img src={outfit1} className="card-img-top img-fluid card-img-no-radius" alt="Outfit" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-head">Best Summer Outfit Style</h5>
                  <p style={{ color: '#555' }} className="m-0 mt-1">14 Feb
                    <ul className='mb-3'><li>Livina Style</li></ul>
                  </p>
                  <p className="card-text" style={{ fontSize: '13px' }}>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <p className="cardFooter">
                    <a href="#Exploremore" className='seeMore'>Explore more</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Blog
