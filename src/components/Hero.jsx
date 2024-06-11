import React from 'react'
import Commonbtn from '../common/Commonbtn'
import tick from '../assets/images/svg/tick.svg'
const Hero = () => {
  return (
    <>
      <section id='home'>
        <div className=' container '>
          <div className=' d-flex flex-column align-items-center pt-heading-1'>
            <h1 className=' mb-0 white ff-cond fw-700 text-96 lh-115 max-730 text-center'>Automotive Dry Ice Cleaning</h1>
            <p className=' text-center mb-0 white ff-acumin fw-400 text-20 lh-30 max-430 pt-3'>Discover the ultimate clean for your machine. No chemicals, no abrasives and no drama.</p>
            <div className='pt-hero-btn'>
              <Commonbtn name="Get Instant Quote" />
            </div>
            <div className=' hero-blur-box mt-blur-box'>
              <div className='d-flex flex-wrap justify-content-center  align-items-center gap-blur-box'>
                <div className=' d-flex align-items-center gap-12'>
                  <img src={tick} alt="check" />
                  <p className=' mb-0 white ff-acumin-bold fw-700 text-16 lh-24'>Non-Abrasive</p>
                </div>
                <div className=' d-flex align-items-center gap-12'>
                  <img src={tick} alt="check" />
                  <p className=' mb-0 white ff-acumin-bold fw-700 text-16 lh-24'>No Chemicals</p>
                </div>
                <div className=' d-flex align-items-center gap-12'>
                  <img src={tick} alt="check" />
                  <p className=' mb-0 white ff-acumin-bold fw-700 text-16 lh-24'>No Mess</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero