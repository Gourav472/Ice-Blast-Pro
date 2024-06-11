import React from 'react'
import cloud from "../assets/images/colud1.png"
import water1 from '../assets/images/water1.png'
import cloud2 from '../assets/images/cloud2.png'
import water2 from '../assets/images/water-2.png'
const Understanding = () => {
    return (
        <>
            <section className=' under-bg position-relative'>
                <img className=' w-100 z-0' src={cloud} alt="white-cloud" />
                <div className=' container position-relative z-1'>
                    <h3 className=' mb-0 white ff-cond fw-700 text-48 lh-57 text-center pt-4 pt-sm-0 ' data-aos="flip-down">Understanding Dry Ice Blasting</h3>
                    <div className="row py-under-1 ">
                        <div className=" col-lg-6 d-flex justify-content-center justify-content-lg-start" data-aos="fade-right">
                            <div className=' d-flex flex-column gap_6'>
                                <p className=' mb-0 ff-acumin-bold fw-700 text-24 lh-36 white text-center text-lg-start'>What is Dry Ice Blasting?</p>
                                <p className=' mb-0 white ff-acumin fw-400 text-18 lh-27 max-558 op-90 text-center text-lg-start'>Dry ice blasting is an innovative cleaning technology that uses solid CO2 (carbon dioxide) pellets. These pellets are propelled at high speeds to clean surfaces. Unlike traditional cleaning methods, this process does not involve water or abrasive materials, making it incredibly safe and effective for delicate areas like engine bays, undercarriages, and even car interiors.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end d-xxl-none mt-4 mt-md-0" data-aos="fade-left">
                            <img className=' max-728 w-100 ' src={water1} alt="ice1" />
                        </div>
                    </div>
                    <div className="row flex-lg-row-reverse py-under-2">
                        <div className=" col-lg-6 d-flex justify-content-center justify-content-lg-end" data-aos="fade-left">
                            <div className=' d-flex flex-column gap_6'>
                                <p className=' mb-0 ff-acumin-bold fw-700 text-24 lh-36 white text-center text-lg-start'>What is Dry Ice Blasting?</p>
                                <p className=' mb-0 white ff-acumin fw-400 text-18 lh-27 max-558 op-90 text-center text-lg-start'>Dry ice blasting is an innovative cleaning technology that uses solid CO2 (carbon dioxide) pellets. These pellets are propelled at high speeds to clean surfaces. Unlike traditional cleaning methods, this process does not involve water or abrasive materials, making it incredibly safe and effective for delicate areas like engine bays, undercarriages, and even car interiors.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end d-xxl-none mt-4 mt-md-0" data-aos="fade-right">
                            <img className=' max-641 w-100' src={water2} alt="ice2" />
                        </div>
                    </div>

                </div>
                <img className=' max-728 d-none d-xxl-block  w-100 z-0 position-absolute ice-position' src={water1} alt="ice1" />
                <img className=' max-641 d-none d-xxl-block  w-100 z-0 position-absolute ice-position-2' src={water2} alt="ice2" />
                <img className='b-decrease w-100' src={cloud2} alt="white-cloud-2" />
            </section>
        </>
    )
}

export default Understanding
