import React from 'react'
import news1 from '../assets/images/news1.png'
import news2 from '../assets/images/news2.png'
import news3 from '../assets/images/news3.png'
import Commonbtn from '../common/Commonbtn'
const News = () => {
    return (
        <>
            <section>
                <div className=' container'>
                    <div className=' d-flex flex-column'>
                        <h3 className=' mb-0 black text-center ff-cond fw-700 text-48 lh-57 pt-3 pt-md-0'data-aos="fade-right">Latest News & Insights</h3>
                        <p className=' mb-0 black op-70 ff-acumin fw-400 text-16 lh-24 pt-3 text-center'data-aos="fade-left">Uncover the latest insights and innovation in car care.</p>
                        <div className="row py-news-row">
                            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center justify-content-lg-start"data-aos="flip-right">
                                <div className='news-box d-flex flex-column w-100 cp'>
                                    <img className=' cp w-100 max-344' src={news1} alt="news-1" />
                                    <p className=' mb-0 op-80 black ff-acumin fw-600 text-16 lh-24 pt-20 text-center text-md-start'>January 1st, 2024</p>
                                    <p className=' mb-0 black ff-acumin-bold fw-700 text-16 lh-24 max-323 pt-10 text-center text-md-start'>What is Dry Ice Blasting? An In-Depth Guide tp Revolutionary Car Cleaning</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center  mt-4 mt-lg-0 "data-aos="flip-up">
                                <div className='news-box d-flex flex-column w-100 cp'>
                                    <img className='cp w-100 max-344' src={news2} alt="news-2" />
                                    <p className=' mb-0 op-80 black ff-acumin fw-600 text-16 lh-24 pt-20  text-center text-md-start'>January 1st, 2024</p>
                                    <p className=' mb-0 black ff-acumin-bold fw-700 text-16 lh-24 max-323 pt-10  text-center text-md-start'>What is Dry Ice Blasting? An In-Depth Guide tp Revolutionary Car Cleaning</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end mt-4 mt-lg-0"data-aos="flip-left">
                                <div className='news-box d-flex flex-column w-100 cp'>
                                    <img className='cp w-100 max-344' src={news3} alt="news-3" />
                                    <p className=' mb-0 op-80 black ff-acumin fw-600 text-16 lh-24 pt-20  text-center text-md-start'>January 1st, 2024</p>
                                    <p className=' mb-0 black ff-acumin-bold fw-700 text-16 lh-24 max-323 pt-10  text-center text-md-start'>What is Dry Ice Blasting? An In-Depth Guide tp Revolutionary Car Cleaning</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' d-flex justify-content-center pb-news'data-aos="fade-up">
                        <Commonbtn name="More Blogs" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default News