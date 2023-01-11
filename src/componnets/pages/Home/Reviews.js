import React, { useEffect, useState } from 'react';
import banner from '../../../assets/banner-9.png.webp';
import man from '../../../assets/electrician-manual-worker-removebg-preview.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import ReactStars from "react-rating-stars-component";
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://manufacturer-website-server-production-2545.up.railway.app/review', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem("AssesToken")}`
            },
        })
            .then(response => response.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div>
            {/* ===================== ret =====================  */}

            <div className='max-w-7xl mx-auto my-16 px-8 mb-16'>
                <h1 className='mb-12 text-4xl text-center text-secondary font-bold' >Customer Commit</h1>
            </div>
            <div className='max-w-7xl mx-auto my-16 px-8 mb-16'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    pagination={true}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                >
                    {
                        reviews.map(review => <SwiperSlide key={review._id} className='m-3'>
                            <div data-aos="zoom-in" className='h-[320px] w-full p-4 shadow-xl rounded-2xl'>
                                <div className="card-body">
                                    <div className="card-actions justify-center">
                                        <div className="avatar">
                                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={review?.image} alt='Images' />
                                            </div>
                                        </div>
                                    </div>

                                    <p> <span className='text-2xl font-mono text-secondary'>"</span>{review?.text}<span className='text-2xl font-mono text-secondary'>"</span></p>
                                    <div className='text-center mt-4'>
                                        <div className="rating">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={review.Rating}
                                                activeColor="#ffd700"
                                            />,
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>


            {/* ============= =============== */}
            <div className='mt-20'>
                <div style={{ background: `url(${banner})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    <div className="hero p-2 md:p-0">
                        <div className="hero-content flex-col lg:flex-row-reverse p-0">
                            <div data-aos="fade-right">
                                <img className='hidden lg:block w-100 h-100' src={man} alt='' />
                            </div>
                            <div data-aos="fade-left" className='text-white '>
                                <h1 className='m-5 text-3xl font-bold font-serif '>YOU’LL BE HAPPY TO SEE OUR AWESOME</h1>
                                <h1 className='m-5 text-3xl font-bold  font-serif '>FEATURES.</h1>
                                <p className='m-5 font-bold '>Sale 20% off your Collection days</p>
                                <button className=" m-5 btn btn-primary">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Reviews;