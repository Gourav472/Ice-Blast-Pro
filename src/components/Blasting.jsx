import React from 'react'
import blast1 from '../assets/images/svg/blasting1.svg'
import blast2 from '../assets/images/svg/blasting2.svg'
import blast3 from '../assets/images/svg/blasting3.svg'
import blast4 from '../assets/images/svg/blasting4.svg'
import blastimg from '../assets/images/blast-img.png'
const Blasting = () => {
    return (
        <>
            <section id='service' >
                <div className="container">
                    <h3 className=' mb-0 black fw-700 text-48 lh-27 ff-cond pt-blasting text-center'>Why Choose Dry Ice Blasting for Your Car?</h3>
                    <div className="row flex-column-reverse flex-lg-row py-blasting">
                        <div className="col-12 mt-5 mt-lg-0 col-lg-6 d-flex justify-content-center justify-content-lg-start align-items-lg-center">
                            <div className=' d-flex flex-column  gap-28'>
                                <div className=' d-flex align-items-center gap-12'>
                                    <img src={blast1} alt="svg1" />

                                    <div className=' d-flex flex-column gap-1'>
                                        <p className=' mb-0 ff-acumin-bold fw-700 text-16 lh-24 black'>Effective Cleaning</p>
                                        <p className=' mb-0 ff-acumin fw-400 text-16 lh-24 black max-451'>The sublimation process effectively removes dirt, oil, and grime, even in hard-to-reach areas.</p>
                                    </div>
                                </div>
                                <div className=' d-flex align-items-center gap-12'>
                                    <img src={blast2} alt="svg1" />

                                    <div className=' d-flex flex-column gap-1'>
                                        <p className=' mb-0 ff-acumin-bold fw-700 text-16 lh-24 black'>Non-Abrasive</p>
                                        <p className=' mb-0 ff-acumin fw-400 text-16 lh-24 black max-451'>Unlike sandblasting or chemical cleaning, dry ice blasting won’t damage your car’s components or paint.</p>
                                    </div>
                                </div>
                                <div className=' d-flex align-items-center gap-12'>
                                    <img src={blast3} alt="svg1" />

                                    <div className=' d-flex flex-column gap-1'>
                                        <p className=' mb-0 ff-acumin-bold fw-700 text-16 lh-24 black'>No Residue</p>
                                        <p className=' mb-0 ff-acumin fw-400 text-16 lh-24 black max-451'>Since dry ice sublimates, there’s no residual waste to clean up, making it an environmentally friendly option.</p>
                                    </div>
                                </div>
                                <div className=' d-flex align-items-center gap-12'>
                                    <img src={blast4} alt="svg1" />

                                    <div className=' d-flex flex-column gap-1'>
                                        <p className=' mb-0 ff-acumin-bold fw-700 text-16 lh-24 black'>Safe for Various Materials</p>
                                        <p className=' mb-0 ff-acumin fw-400 text-16 lh-24 black max-451'>It’s safe for use on metals, plastics, rubbers, fabrics and more, ensuring comprehensive cleaning without damage.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
                            <img className=' w-100 max-blast' src={blastimg} alt="car" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Blasting