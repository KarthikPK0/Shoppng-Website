import React from 'react';
import './NewsLetter.css';
import emailButton from '../assets/images/emailButton.png';

function NewsLetter() {
  return (
    <>
      <div className="bg-light nlContainer ">
        <div className="container shadow newsLetter d-flex flex-column align-items-center " style={{ backgroundColor: '#fff' }}>
          <h2 style={{ paddingTop: '80px' }} className="text-center mb-3">
            Join Our News Letters
          </h2>
          <p className="text-center mb-3">
            Leverage agile frameworks to provide a robust synopsis for high level overviews. <br />
            Iterative approaches to corporate strategy foster
           
          </p>
          <form className=' emailForm py-2 py-md-0 px-3 px-md-0' >
              <div className="form-floating mt-3 mb-3 pe-4 pb-5">
                <input
                  style={{ width: '100%', height: '60px', padding: '20px' }} 
                  type="email"
                  className="form-control bg-light"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Insert your mail here</label>
                <div
                  style={{ position: 'absolute', right: '0', top: '7%' }}
                  className="emailButton d-flex justify-content-center align-items-center"
                >
                  <a href="searchButton">
                    <img src={emailButton} alt="emailBtnIcon" />
                  </a>
                </div>
              </div>
            </form>
         
        </div>
      </div>
    </>
  );
}

export default NewsLetter;
