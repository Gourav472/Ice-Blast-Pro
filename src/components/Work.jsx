import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import work1 from '../assets/images/work1.png'
import work2 from '../assets/images/work2.png'
import simg1 from '../assets/images/swiper-img1.webp'
import simg2 from '../assets/images/swiper-img2.webp'
import simg3 from '../assets/images/swiper-img3.webp'
import simg4 from '../assets/images/swiper-img4.webp'
import simg5 from '../assets/images/swiper-img5.webp'
const Work = () => {


    return (
        <>
            <section className=' bg-orange ' id='blog'>
                <img className=' w-100' src={work1} alt="cloud" />
                <div className=' container position-relative py-work'>
                    <div className=' d-flex flex-column'>
                        <h3 className=' pt-2 mb-0 white ff-cond fw-700 text-48 lh-57 text-center pb-work-text
                    '>See Our Latest Work</h3>
                        <div className="height-swiper">
                            <Swiper slidesPerView={2.5}
                                spaceBetween={0}
                                centeredSlides={true}
                                pagination={{
                                    clickable: true,
                                }}
                                effect={'coverflow'}
                                navigation={{ nextEl: ".swiper-btn-next", prevEl: ".swiper-btn-prev" }}
                                modules={[EffectCoverflow, Pagination, Navigation]}
                                loop={true}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 100,
                                    depth: 150,
                                    modifier: 2,
                                    slideShadows: false,
                                }}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 0,
                                    },
                                    992: {
                                        slidesPerView: 2.5,
                                        spaceBetween: 0,
                                    },
                                }}>
                                <SwiperSlide className=' gallery-slide'>
                                    <div>
                                        <img className=' w-100' src={simg1} alt="swiper-1" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className=' gallery-slide'>
                                    <div>
                                        <img className=' w-100' src={simg2} alt="swiper-2" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className=' gallery-slide'>
                                    <div>
                                        <img className=' w-100' src={simg3} alt="swiper-3" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className=' gallery-slide'>
                                    <div>
                                        <img className=' w-100' src={simg4} alt="swiper-4" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className=' gallery-slide'>
                                    <div>
                                        <img className=' w-100' src={simg5} alt="swiper-5" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className=' swiper-btn-prev position-absolute position-prevbtn'>
                        <div className=' btn-box d-flex align-items-center justify-content-center'>
                            <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5115 1.36712C10.6663 1.51626 10.7892 1.69341 10.873 1.88842C10.9569 2.08344 11 2.2925 11 2.50363C11 2.71476 10.9569 2.92381 10.873 3.11883C10.7892 3.31385 10.6663 3.491 10.5115 3.64014L4.02997 9.89496L10.5115 16.1498C10.8238 16.4512 10.9993 16.86 10.9993 17.2863C10.9993 17.7126 10.8238 18.1214 10.5115 18.4228C10.1991 18.7242 9.7755 18.8936 9.33378 18.8936C8.89206 18.8936 8.46843 18.7242 8.15608 18.4228L0.488524 11.0234C0.333664 10.8743 0.210803 10.6971 0.126975 10.5021C0.043148 10.3071 0 10.098 0 9.8869C0 9.67577 0.043148 9.46671 0.126975 9.27169C0.210803 9.07668 0.333664 8.89953 0.488524 8.75039L8.15608 1.351C8.79087 0.738413 9.85998 0.738413 10.5115 1.36712Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <div className=' swiper-btn-next  position-absolute position-nextbtn'>
                        <div className='btn-box d-flex align-items-center justify-content-center'>
                            <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.988526 1.36712C0.833665 1.51626 0.710805 1.69341 0.626977 1.88842C0.543149 2.08344 0.5 2.2925 0.5 2.50363C0.5 2.71476 0.543149 2.92381 0.626977 3.11883C0.710805 3.31385 0.833665 3.491 0.988526 3.64014L7.47003 9.89496L0.988526 16.1498C0.676181 16.4512 0.500707 16.86 0.500707 17.2863C0.500707 17.7126 0.676181 18.1214 0.988526 18.4228C1.30087 18.7242 1.7245 18.8936 2.16622 18.8936C2.60794 18.8936 3.03157 18.7242 3.34392 18.4228L11.0115 11.0234C11.1663 10.8743 11.2892 10.6971 11.373 10.5021C11.4569 10.3071 11.5 10.098 11.5 9.8869C11.5 9.67577 11.4569 9.46671 11.373 9.27169C11.2892 9.07668 11.1663 8.89953 11.0115 8.75039L3.34392 1.351C2.70913 0.738413 1.64002 0.738413 0.988526 1.36712Z" fill="white" />
                            </svg>

                        </div>
                    </div>
                </div>
                <img className=' w-100' src={work2} alt="cloud" />
            </section>
        </>
    )
}

export default Work