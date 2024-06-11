import React from 'react'
import wash from '../assets/images/wash.png'
import Commonbtn from '../common/Commonbtn'
import blastcloud from '../assets/images/blast-cloud.png'
import blastcloud2 from '../assets/images/blast-cloud2.png'
import play from '../assets/images/svg/play.svg'

const Scenes = () => {
    return (
        <>
            <section className=' bg-scenes'>
                <img className='  w-100' src={blastcloud} alt="cloud" />
                <div className=' container'>
                    <div className=' d-flex flex-column align-items-center'>
                        <div className=' d-flex flex-column py-scenes'>
                            <h3 className=' max-680 white mb-0  ff-cond fw-700 text-48 lh-57 text-center'data-aos="fade-right">Behind the Scenes Dry Ice Blasting a Car</h3>
                            <p className='max-592 mb-0  white ff-acumin fw-400 text-16 lh-24 text-center pt-12'data-aos="fade-left">From the initial setup to the final sweep, discover how we elevate car cleaning to an art form, delivering immaculate results every time.</p>
                        </div>
                        <div className=' position-relative' data-aos="flip-up">
                            <img className=' max-1140 w-100 ' src={wash} alt="washing-car" />
                            <div className=' play-btn-2 position-absolute cp d-flex justify-content-center align-items-center'>
                                <img src={play} alt="play-icon" />
                            </div>
                        </div>
                        <p className=' mb-0 text-center white fw-700 ff-acumin-bold text-16 lh-24 pt-scenes-text'data-aos="fade-right">Discover a cleaner, fresher, and more beautiful car, inside and out, with our advanced dry ice blasting services.</p>
                        <div className=' py-btn-scenes'data-aos="fade-up">
                            <Commonbtn name="Get Instant Quote" />
                        </div>
                    </div>
                </div>
                <img className='  w-100' src={blastcloud2} alt="cloud" />
            </section>
        </>
    )
}

export default Scenes