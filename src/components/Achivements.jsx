import React from 'react'
import './Achivements.css'
import clientLogo1 from '../assets/images/cLogo1.png'
import clientLogo2 from '../assets/images/cLogo2.png'
import clientLogo3 from '../assets/images/cLogo3.png'
import clientLogo4 from '../assets/images/cLogo4.png'
import clientLogo5 from '../assets/images/cLogo5.png'
import clientLogo6 from '../assets/images/cLogo6.png'

function Achivements() {
  return (
    <>
      <div className=" bg-light  w-100 s5">
        <h2 className="pt-4 pb-2   text-center fw-bold">
          Our Achievement
        </h2>
        <div style={{ gap: '10px' }} className="pt-4 ps-5 pe-5 s5Logos d-flex flex-row flex-wrap justify-content-evenly flex-column flex-md-row ">
          <div><img src={clientLogo1} alt="clientLogo1" /></div>

          <div><img src={clientLogo2} alt="clientLogo1" /></div>

          <div>
            <img src={clientLogo3} alt="clientLogo1" />
          </div>
          <div>
            <img src={clientLogo4} alt="clientLogo1" />
          </div>
          <div>
            <img src={clientLogo5} alt="clientLogo1" />
          </div>
          <div>
            <img src={clientLogo6} alt="clientLogo1" />
          </div>

        </div>
        </div>
      
    </>
  )
}

export default Achivements
