import React from 'react'
import team from '../assets/images/team.png'
import cloudteam from '../assets/images/team-cloud.png'
import elipseteam from '../assets/images/team-elipse.png'
const Team = () => {
    return (
        <>
            <section className=' position-relative'>
                <div className=' container position-relative z-2 '>
                    <div className="row flex-column-reverse flex-lg-row py-team">
                        <div className="col-12 col-lg-5 mt-team-col d-flex justify-content-center justify-content-xl-end  position-relative  "data-aos="fade-up-right">
                            <img className=' z-3 max-461 position-relative  image-border w-100' src={team} alt="team-man" />
                            <img className=' max-577 team-elipse-w d-none d-sm-block position-absolute position-team-elipse' src={elipseteam} alt="elipse" />
                        </div>
                        <div className="col-12 col-lg-7  d-flex justify-content-center align-items-lg-center justify-content-lg-end justify-content-xxl-center"data-aos="fade-up-left">
                            <div className=' d-flex flex-column '>
                                <h3 className=' mb-0 black ff-cond fw-700 text-48 lh-57 text-center text-lg-start'>Meet The Team</h3>
                                <p className=' mb-0 black fw-700 ff-acumin-bold text-18 lh-21 pt-10 text-center text-lg-start'>Oxfordshire's Dry Ice Car Cleaning Specialists</p>
                                <p className=' mb-0 black op-70 ff-acumin fw-400 text-16 lh-24 pt-3 max-625 text-center text-lg-start'>We’re shaking up the car cleaning scene with Dry Ice Blasting. From our buzzing unit in Oxfordshire, we're not just a team - we’re a Crew of car enthusiasts, expert restorers, and skilled mechanics united by our love for cars. We treat every car like it’s our own, driven by a philosophy that doing the right thing for your ride is the only way to go. When you hand over your keys to us, you're entrusting your pride and joy to fellow car lovers who understand that every car deserves precision care and a touch of cool.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <img className=' w-100' src={cloudteam} alt="cloud" />
            </section>
        </>
    )
}

export default Team