import React, { useEffect, useState } from 'react'
import location from '../assets/images/svg/location.svg'
import message from '../assets/images/svg/message.svg'
import phon from '../assets/images/svg/phon.svg'
import time from '../assets/images/svg/time.svg'
import Navlogo from '../assets/images/svg/navbar-logo.svg'
import Commonbtn from '../common/Commonbtn'
import Slider from "react-slick";
import { Container } from 'react-bootstrap'
const Navbar = () => {
    const [nav, setnav] = useState(false)

    useEffect(() => {
        document.body.style.overflow = nav ? "hidden" : "visible";

        return () => {
            document.body.style.overflow = "";
        }
    }, [nav]);
    var settings = {
        dots: false,
        autoplay: true,
        variableWidth: true,
        arrows: false,
        infinite: true,
        speed: 8000,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: true,
    };
    return (
        <>
            <Container className=' py-header-links px-0 d-none d-xl-block max-1140 '>
                <div className='  d-flex align-items-center justify-content-between  px-header-links '>
                    <div className=' d-flex align-items-center gap-10'>
                        <img className='cp' src={location} alt="svg" />
                        <p className=' mb-0 white op-70 ff-acumin fw-400 text-16 lh-24 footer-hover'>Crawley Mill Industrial Estate, Witney, Oxfordshire</p>
                    </div>
                    <div className=' d-flex align-items-center gap-10'>
                        <a href="mailto:book@dryiceblastingpro.co.uk">   <img className='cp' src={message} alt="svg2" /></a>
                        <a href="mailto:book@dryiceblastingpro.co.uk"> <p className=' mb-0 white op-70 ff-acumin fw-400 text-16 lh-24 footer-hover'>book@dryiceblastingpro.co.uk</p></a>
                    </div>
                    <div className=' d-flex align-items-center gap-10'>
                        <a href="tel:01865123456">  <img className='cp' src={phon} alt="svg3" /></a>
                        <a href="tel:01865123456"><p className=' mb-0 white op-70 ff-acumin fw-400 text-16 lh-24 footer-hover'>01865123456</p></a>
                    </div>
                    <div className=' d-flex align-items-center gap-10'>
                        <img className='cp' src={time} alt="svg4" />
                        <p className=' mb-0 white op-70 ff-acumin fw-400 text-16 lh-24 footer-hover'>Mon - Fri: 9am to 5pm</p>
                    </div>
                </div>

            </Container>
            <Slider {...settings} className=' py-header-links d-xl-none '>
                <div className=' d-flex align-items-center gap-10 mx-4'>
                    <img className='cp' src={location} alt="svg" />
                    <p className=' mb-0 white op-70 ff-acumin fw-400 text-16 lh-24'>Crawley Mill Industrial Estate, Witney, Oxfordshire</p>
                </div>
                <div className=' d-flex align-items-center gap-10 mx-4'>
                    <a href="mailto:book@dryiceblastingpro.co.uk">   <img className='cp' src={message} alt="svg2" /></a>
                    <a href="mailto:book@dryiceblastingpro.co.uk"> <p className=' mb-0 white op-70 ff-acumin fw-400 text-16 lh-24'>book@dryiceblastingpro.co.uk</p></a>
                </div>
                <div className=' d-flex align-items-center gap-10 mx-4'>
                    <a href="tel:01865123456">  <img className='cp' src={phon} alt="svg3" /></a>
                    <a href="tel:01865123456"><p className=' mb-0 white op-70 ff-acumin fw-400 text-16 lh-24'>01865123456</p></a>
                </div>
                <div className=' d-flex align-items-center gap-10 mx-4'>
                    <img className='cp' src={time} alt="svg4" />
                    <p className=' mb-0 white op-70 ff-acumin fw-400 text-16 lh-24'>Mon - Fri: 9am to 5pm</p>
                </div>
            </Slider>

            <Container fluid className=' mx-navbar px-xxl-0'>
                <div className='bg-white navbox d-flex justify-content-between align-items-center '>
                    <img className='cp' src={Navlogo} alt="logo" />
                    <div className={` ${nav ? "end-0" : "right_100"} d-flex align-items-center gap-46 mobile_view  `}>
                        <ul className=' m-0 p-0 d-flex align-items-center flex-column flex-lg-row gap-24'>
                            <li><a href="#home" className=' fw-700 text-16 lh-19 grey ff-acumin-bold nav-links-hover'>Home</a></li>
                            <li><a href="#about" className=' fw-700 text-16 lh-19 grey ff-acumin-bold nav-links-hover'>About us</a></li>
                            <li><a href="#service" className=' fw-700 text-16 lh-19 grey ff-acumin-bold nav-links-hover'>Services</a></li>
                            <li><a href="#price" className=' fw-700 text-16 lh-19 grey ff-acumin-bold nav-links-hover'>Pricing</a></li>
                            <li><a href="#blog" className=' fw-700 text-16 lh-19 grey ff-acumin-bold nav-links-hover'>Blog</a></li>
                            <li><a href="#contact" className=' fw-700 text-16 lh-19 grey ff-acumin-bold nav-links-hover'>Contact us</a></li>
                            <li className=' d-lg-none'><Commonbtn name="Call Us" /></li>
                        </ul>
                    </div>
                    <div className=' d-none d-lg-block'>
                        <Commonbtn name="Call Us" />
                    </div>
                    <div onClick={() => { setnav(!nav) }} class={`${nav ? "cross" : ""} menu d-block d-lg-none`}>
                        <span></span>
                        <span class="my-2"></span>
                        <span></span>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Navbar