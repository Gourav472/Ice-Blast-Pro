import React from 'react'
import prime1 from '../assets/images/prime-cloud1.png'
import prime2 from '../assets/images/prime-cloud2.png'
import Commonbtn from '../common/Commonbtn'

const Prime = () => {
    return (
        <>
            <section>
                <img className=' cloud-height z-0 w-100' src={prime1} alt="colud-prime" />
                <div className=' container position-relative z-1'>
                    <div className=' d-flex flex-column align-items-center'>
                        <h3 className=' mb-0 black ff-cond fw-700 text-48 lh-57 text-center'>Blast The Grime and Bring Back The Prime</h3>
                        <p className=' mb-0 black op-70 fw-400 ff-acumin text-16 lh-24 text-center max-966 pt-3'>Rest easy knowing that our approach is tailored to protect and enhance your vehicle. We don’t clean; we care. Every treatment is a promise that your vehicle will not only look its best but also receive the care it needs for a longer, healthier life on the road.</p>
                        <p className=' mb-0 black ff-acumin-bold fw-700 text-16 lh-19 text-center pt-3'>Ready For a Transformation? Get an Instant Quote</p>
                        <div className=' mt-submit'>
                            <Commonbtn name="Get Instant Quote" />
                        </div>
                    </div>
                </div>
                <img className=' cloud-height2 z-0 w-100' src={prime2} alt="colud-prime" />
            </section>
        </>
    )
}

export default Prime