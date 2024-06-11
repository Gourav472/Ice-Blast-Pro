import React, { useState } from 'react'
import Commonbtn from '../common/Commonbtn'
import minus2 from '../assets/images/svg/minus2.svg'
import plus2 from '../assets/images/svg/plus2.svg'
const Numbers = () => {
    const [openAccordion, setOpenAccordion] = useState(null);
    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };
    const accordionData = [
        {
            title: "Engine Bay Perfection from £375",
            content: `Crank up the cool factor under your hood with engine bay ice
                  blasting. We delicately lift away oil, grease, and grime
                  without water or chemicals. It's the ultimate detox for your
                  engine, ensuring every hose, wire, and component is treated
                  with the respect it deserves.`,
            color: "bg-l-blue",
            aos: "fade-right",
        },
        {
            title: "Underbelly Deep-Clean from £750",
            content: `Crank up the cool factor under your hood with engine bay ice
                  blasting. We delicately lift away oil, grease, and grime
                  without water or chemicals. It's the ultimate detox for your
                  engine, ensuring every hose, wire, and component is treated
                  with the respect it deserves.`,
            color: "bg-l-purple",
            aos: "fade-left",
        },
        {
            title: "Ultimate Undercarriage & Engine Bay Overhaul from £1,125",
            content: `Crank up the cool factor under your hood with engine bay ice
                  blasting. We delicately lift away oil, grease, and grime
                  without water or chemicals. It's the ultimate detox for your
                  engine, ensuring every hose, wire, and component is treated
                  with the respect it deserves.`,
            color: "bg-ll-pink ",
            aos: "fade-right",
        },
        {
            title: "Need Something Else?",
            content: ` Crank up the cool factor under your hood with engine bay ice
                  blasting. We delicately lift away oil, grease, and grime
                  without water or chemicals. It's the ultimate detox for your
                  engine, ensuring every hose, wire, and component is treated
                  with the respect it deserves.`,
            color: "bg-l-pink ",
            aos: "fade-left",
        },
    ];

    return (
        <>
            <section className=' py-numbers' id='price'>
                <div className=' container'>
                    <div className=' d-flex flex-column align-items-center'>
                        <h3 className=' mb-0 black fw-700 ff-cond text-48 lh-57 pt-numbers' data-aos="fade-up">Let's Talk Numbers</h3>
                        <p className=' mb-0 max-759 ff-acumin fw-400 text-16 lh-lh-24 text-center op-70 pt-14' data-aos="fade-up">We're all about transparency, but we also know that each car tells a different story. The cost can vary based on how much grime we're up against. More dirt might mean more ice and more time to get that perfect finish. But don't sweat it – we'll always give you a straight price, customised to your car's needs.</p>

                        <div className="py-accordian accordions d-flex flex-column gap-20 w-100 overflow-hidden">
                            {accordionData.map((item, index) => {
                                return (
                                    <div data-aos={`${item.aos}`}
                                        key={index}
                                        className={`accordion_item d-flex ${item.color} flex-column flex-lg-row gap-accordian2 justify-content-between align-items-start p-accordian2`}
                                    >
                                        <div
                                            onClick={() => toggleAccordion(index)}
                                            className="accordion_head pointer d-flex align-items-center justify-content-between gap-3 w-100" >
                                            <h4 className="mb-0 ff-acumin fw-700 text-28 lh-78 blue">
                                                {item.title}
                                            </h4>
                                            <span
                                                onClick={() => toggleAccordion(index)}
                                                className="d-lg-none" >
                                                {openAccordion === index ? <img src={minus2} alt="subtract" /> : <img src={plus2} alt="add" />}
                                            </span>
                                        </div>
                                        <div
                                            className={`accordion_body ${openAccordion === index ? "open" : ""}`}>
                                            <p className="mb-0 ff-acumin fw-400 text-16 lh-25 blue op-70">
                                                {item.content}
                                            </p>
                                        </div>
                                        <span
                                            onClick={() => toggleAccordion(index)}
                                            className="d-none d-lg-inline">
                                            {openAccordion === index ? <img src={minus2} alt="subtract" /> : <img src={plus2} alt="add" />}
                                        </span>
                                    </div>);
                            })}
                        </div>

                        <div className=' w-100 instant-box d-flex flex-column align-items-center' data-aos="flip-up">
                            <h4 className=' mb-0 black ff-cond fw-700 text-32 lh-48 text-center'>Get an Instant Quote Today</h4>
                            <p className=' mb-0 black ff-acumin fw-400 text-16 lh-24 op-80 max-770 text-center pt-3'>Regular dry ice cleaning prevents costly rust and wear. Avoid potentially thousands of pounds worth of bodywork repairs when just for a fraction of that you can keep your car in prime condition all year round! What are you waiting for?</p>
                            <div className='pt-instant-btn'>
                                <Commonbtn name="Get Instant Quote" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Numbers