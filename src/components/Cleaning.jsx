import React from 'react'
import check from '../assets/images/svg/yellow-tick.svg'
import img1 from '../assets/images/cleaning-img.png'
import play from '../assets/images/svg/play.svg'
import Commonbtn from '../common/Commonbtn'

const Cleaning = () => {
    return (
        <>
            <section className='cleaning-bg' id='about'>
                <div className=' container'>
                    <div className="row flex-column-reverse flex-lg-row py-cleaning">
                        <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end mt-5 mt-lg-0">
                            <div className=' d-flex flex-column '>
                                <h2 className=' mb-0 black ff-cond fw-700 text-48 lh-57 max-future text-center text-lg-start'>The Future of Car Cleaning</h2>
                                <p className=' mb-0 black op-70 ff-acumin fw-400 text-16 lh-24 max-558 pt-13 text-center text-lg-start'>No need to be overwhelmed by the thought of harsh chemicals and abrasive cleaning methods. Our dry ice blasting leaves your car spotless, reaching where no cloth can.</p>
                                <div className=' d-flex align-items-start gap-16 pt-4'>
                                    <img src={check} alt="yellow-tick" />
                                    <div className=' d-flex flex-column gap_6'>
                                        <p className=' mb-0 black ff-acumin-bold fw-700 text-16 lh-24'>Gentle Yet Powerful</p>
                                        <p className=' mb-0 black max-518'>Our dry ice method lifts dirt effortlessly without the need for harsh chemicals or abrasive techniques.</p>
                                    </div>
                                </div>
                                <div className=' d-flex align-items-start gap-16 pt-4'>
                                    <img src={check} alt="yellow-tick" />
                                    <div className=' d-flex flex-column gap_6'>
                                        <p className=' mb-0 black ff-acumin-bold fw-700 text-16 lh-24'>Precision Cleaning</p>
                                        <p className=' mb-0 black max-518'>See how accurately we target the grunge zones, ensuring every inch of your car's undercarriage and engine is meticulously cleaned.</p>
                                    </div>
                                </div>
                                <div className=' d-flex align-items-start gap-16 pt-4'>
                                    <img src={check} alt="yellow-tick" />
                                    <div className=' d-flex flex-column gap_6'>
                                        <p className=' mb-0 black ff-acumin-bold fw-700 text-16 lh-24'>Safe for AlI Vehicles</p>
                                        <p className=' mb-0 black max-518'>Perfect for all car types, from family hatchbacks to classic cars and high-performance vehicles.</p>
                                    </div>
                                </div>
                                <div className=' d-flex align-items-start gap-16 pt-4'>
                                    <img src={check} alt="yellow-tick" />
                                    <div className=' d-flex flex-column gap_6'>
                                        <p className=' mb-0 black ff-acumin-bold fw-700 text-16 lh-24'>Eco-Friendly Approach</p>
                                        <p className=' mb-0 black max-518'>Notice the absence of water or chemical runoff, showcasing our commitment to an environmentally responsible cleaning process.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-end ">
                            <div className=' position-relative'>
                                <img className='max-cleaning-img' src={img1} alt="image-1" />
                                <div className=' play-btn position-absolute cp d-flex justify-content-center align-items-center'>
                                    <img src={play} alt="play-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' d-flex flex-column align-items-center gap-20'>
                        <p className=' mb-0 black ff-acumin-bold fw-700 text-16 lh-24'>Like What You See? Get an Instant Quote</p>
                        <div className=' z-1'>
                            <Commonbtn name="Get Instant Quote" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cleaning