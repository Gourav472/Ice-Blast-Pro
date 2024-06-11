import React from 'react'
import location2 from '../assets/images/svg/location2.svg'
import mail2 from '../assets/images/svg/mail2.svg'
import phon2 from '../assets/images/svg/phon2.svg'
import time2 from '../assets/images/svg/time2.svg'
import footerlogo from '../assets/images/svg/footer-logo.svg'
import footer1 from '../assets/images/svg/instagram.svg'
import footer2 from '../assets/images/svg/twitter.svg'
import footer3 from '../assets/images/svg/utube.svg'
import Slider from "react-slick";
const Footer = () => {
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
            <footer className=' footer-bg' id='contact'>
                <div className=' container  d-none d-xl-block'>
                    <div className=' py-footer-slider  d-flex align-items-center justify-content-between  px-header-links'>
                        <div className=' d-flex align-items-center gap-10'>
                            <img className='cp' src={location2} alt="svg" />
                            <p className=' mb-0 white op-70 ff-acumin fw-400 text-16 lh-24 footer-hover cp'>Crawley Mill Industrial Estate, Witney, Oxfordshire</p>
                        </div>
                        <div className=' d-flex align-items-center gap-10'>
                            <a href="mailto:book@dryiceblastingpro.co.uk">   <img className='cp' src={mail2} alt="svg2" /></a>
                            <a href="mailto:book@dryiceblastingpro.co.uk"> <p className=' mb-0 white op-70 ff-acumin fw-400 text-16 lh-24 footer-hover'>book@dryiceblastingpro.co.uk</p></a>
                        </div>
                        <div className=' d-flex align-items-center gap-10'>
                            <a href="tel:01865123456">  <img className='cp' src={phon2} alt="svg3" /></a>
                            <a href="tel:01865123456"><p className=' mb-0 white op-70 ff-acumin fw-400 text-16 lh-24 footer-hover'>01865123456</p></a>
                        </div>
                        <div className=' d-flex align-items-center gap-10'>
                            <img className='cp' src={time2} alt="svg4" />
                            <p className=' mb-0 white op-70 ff-acumin fw-400 text-16 lh-24 footer-hover'>Mon - Fri: 9am to 5pm</p>
                        </div>
                    </div>
                </div>
                <Slider {...settings} className=' py-footer-slider d-xl-none '>
                    <div className=' d-flex align-items-center gap-10 mx-4'>
                        <img className='cp' src={location2} alt="svg" />
                        <p className=' mb-0 white op-70 ff-acumin fw-400 text-16 lh-24'>Crawley Mill Industrial Estate, Witney, Oxfordshire</p>
                    </div>
                    <div className=' d-flex align-items-center gap-10 mx-4'>
                        <a href="mailto:book@dryiceblastingpro.co.uk">   <img className='cp' src={mail2} alt="svg2" /></a>
                        <a href="mailto:book@dryiceblastingpro.co.uk"> <p className=' mb-0 white op-70 ff-acumin fw-400 text-16 lh-24'>book@dryiceblastingpro.co.uk</p></a>
                    </div>
                    <div className=' d-flex align-items-center gap-10 mx-4'>
                        <a href="tel:01865123456">  <img className='cp' src={phon2} alt="svg3" /></a>
                        <a href="tel:01865123456"><p className=' mb-0 white op-70 ff-acumin fw-400 text-16 lh-24'>01865123456</p></a>
                    </div>
                    <div className=' d-flex align-items-center gap-10 mx-4'>
                        <img className='cp' src={time2} alt="svg4" />
                        <p className=' mb-0 white op-70 ff-acumin fw-400 text-16 lh-24'>Mon - Fri: 9am to 5pm</p>
                    </div>
                </Slider>
                <div className=' container'>
                    <div className="row py-footer-row">
                        <div className="col-12 col-lg-4 d-flex">
                            <div className=' d-flex flex-column'>
                                <img className=' cp max-85' src={footerlogo} alt="logo" />
                                <p className=' mb-0 white op-70 ff-acumin fw-400 text-16 lh-25 max-350 pt-10 footer-hover'>IceBlastPro is Oxfordshire's Dry Ice Car Cleaning specialists. Removing dirt and grime in hard to reach areas with a non-abrasive Dry Ice Blasting technique that requires no chemicals and leaves no mess.</p>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-3 mt-5 mt-lg-0 d-flex justify-content-lg-center justify-content-xl-center">
                            <ul className=' d-flex flex-column gap-12 m-0 p-0'>
                                <li className=' mb-1 white ff-acumin-bold fw-700 text-18 lh-27 '>Quick Link</li>
                                <li><a href="#home" className=' footer-hover op-70 white ff-acumin fw-400 text-16 lh-25'>Home</a></li>
                                <li><a href="#about" className=' footer-hover op-70 white ff-acumin fw-400 text-16 lh-25'>About Us</a></li>
                                <li><a href="#service" className=' footer-hover op-70 white ff-acumin fw-400 text-16 lh-25'>Services</a></li>
                                <li><a href="#blog" className=' footer-hover op-70 white ff-acumin fw-400 text-16 lh-25'>Blog</a></li>
                                <li><a href="#faq" className=' footer-hover op-70 white ff-acumin fw-400 text-16 lh-25'>FAQ’s</a></li>
                                <li><a href="#contact" className=' footer-hover op-70 white ff-acumin fw-400 text-16 lh-25'>Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-3 mt-5 mt-lg-0 d-flex  justify-content-lg-start justify-content-xl-center">
                            <ul className=' d-flex flex-column gap-12 m-0 p-0'>
                                <li className=' mb-1 white ff-acumin-bold fw-700 text-18 lh-27 '>Legal Information</li>
                                <li><a href="" className=' footer-hover op-70 white ff-acumin fw-400 text-16 lh-25'>Terms of Service</a></li>
                                <li><a href="" className=' footer-hover op-70 white ff-acumin fw-400 text-16 lh-25'>Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-2 mt-5 mt-lg-0 d-flex justify-content-sm-end justify-content-lg-center justify-content-xl-end">
                            <div className=' d-flex flex-column gap-16 m-0 p-0'>
                                <p className=' mb-1 white ff-acumin-bold fw-700 text-18 lh-27 '>Follow us</p>
                                <div className=' d-flex gap-12 align-items-baseline footer-logo'>
                                    <div className=' footer-box d-flex align-items-center justify-content-center cp'>
                                        <a href="https://www.instagram.com/" target='_blank'><img className='mb-1' src={footer1} alt="instagram" /></a>
                                    </div>
                                    <a href="https://www.instagram.com/" target='_blank' className='footer-hover op-70 white ff-acumin fw-400 text-16 lh-25'>Instagram</a>
                                </div>
                                <div className='d-flex gap-12 align-items-baseline footer-logo'>
                                    <div className=' footer-box d-flex align-items-center justify-content-center cp'>
                                        <a href="https://www.tiktok.com/about" target='_blank'><img className=' mb-1' src={footer2} alt="ticktok" /></a>
                                    </div>
                                    <a href="https://www.tiktok.com/about" target='_blank' className='footer-hover op-70 white ff-acumin fw-400 text-16 lh-25'>Tiktok</a>
                                </div>
                                <div className='d-flex gap-12 align-items-baseline footer-logo'>
                                    <div className=' footer-box d-flex align-items-center justify-content-center cp'>
                                        <a href="https://www.youtube.com/" target='_blank'><img className='mb-1' src={footer3} alt="ticktok" /></a>
                                    </div>
                                    <a href="https://www.youtube.com/" target='_blank' className='footer-hover op-70 white ff-acumin fw-400 text-16 lh-25'>YouTube</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className=' mb-0 white cp footer-hover op-70 ff-acumin fw-400 text-14 lh-16 text-center pb-25'>Copyright©2024(IceBlastPro) All Rights Reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer