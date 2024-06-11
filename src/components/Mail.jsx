import React, { useState } from 'react'
import Commonbtn from '../common/Commonbtn'
import checkbox from '../assets/images/svg/check-box.svg'
const Mail = () => {
  const [check, setcheck] = useState(false)

  const handlecheck = () => {
    setcheck(!check)
  }



  return (
    <>
      <section>
        <div className=' container translate_box'>
          <div className='d-flex align-items-center flex-column'>
            <div className=' mail-box w-100 d-flex flex-column align-items-center'data-aos="fade-down">
              <h3 className=' mb-0 white ff-cond fw-700 text-48 lh-57 text-center'>Join Our Mailing List</h3>
              <p className=' mb-0 pt-2 white op-90 ff-acumin fw-400 text-16 lh-24 text-center'>Get news, videos and deals straight to your inbox.</p>
              <div className='email-input-box w-100 d-flex justify-content-between'>
                <input className=' email-input w-100  pe-4 border-0' type="email" name="email-address" placeholder='Enter your email address ' />
                <div className='d-none d-sm-block'>
                  <Commonbtn name="Subscribe" />
                </div>
              </div>
              <div className='d-sm-none mt-3 d-flex justify-content-center w-100'>
                <Commonbtn name="Subscribe" />
              </div>
              <div className=' d-flex gap_8 pt-20 cp align-items-center'>
                <div className=' cp check-box d-flex align-items-center justify-content-center' onClick={handlecheck}>
                  <img className={`${check ? "d-block" : "d-none"}`} src={checkbox} alt="yellow-tick" />
                </div>
                <p className=' mb-0 op-90 ff-acumin fw-400 white text-14 lh-14 text-center'>I consent to receive emails & confirm I have read the privacy policy.</p>
              </div>
            </div>
          </div>
        </div>
        <iframe className=' d-flex' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27398.701333139492!2d-1.5110413298560048!3d51.794859528983714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876cd1e81b3c1e5%3A0x1a6a99487ec82408!2sCrawley%20Mill%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1717577458432!5m2!1sen!2sin" width="100%" height="456"></iframe>
      </section>
    </>
  )
}

export default Mail
