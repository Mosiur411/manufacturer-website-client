import React, { useEffect, useState } from 'react';
import banner from '../../../assets/banner-9.png.webp';
import man from '../../../assets/electrician-manual-worker-removebg-preview.png';
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization':`Bearer ${localStorage.getItem("AssesToken")}`
            },
        })
            .then(response => response.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div>
            <div className='max-w-7xl mx-auto my-16 px-8 mb-16'>
                <h1 className='mb-12 text-4xl text-center text-primary font-bold' >Customar Say</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {
                        reviews.map(review =>
                            <div className="card  bg-base-100 shadow-2xl">
                                <div className="card-body">
                                    <div className="card-actions justify-center">
                                        <div className="avatar">
                                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={review?.image} alt='Images' />
                                            </div>
                                        </div>
                                    </div>
                                    <p> <span className='text-2xl font-mono text-primary'>"</span>{review?.text}<span className='text-2xl font-mono text-primary'>"</span></p>
                                    <div className='text-center mt-4'>
                                        <div class="rating">
                                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" checked />
                                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                                            <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            {/* ============= =============== */}
            <div className='mt-20'>
                <div style={{ background: `url(${banner})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    <div className="hero p-2 md:p-0">
                        <div className="hero-content flex-col lg:flex-row-reverse p-0">
                            <div>
                                <img className='hidden lg:block w-100 h-100' src={man} alt='' />
                            </div>
                            <div className='text-white'>
                                <h1 className='m-5 text-3xl font-bold font-serif'>YOU’LL BE HAPPY TO SEE OUR AWESOME</h1>
                                <h1 className='m-5 text-3xl font-bold  font-serif'>FEATURES.</h1>
                                <p className='m-5 font-bold'>Sale 20% off your Collection days</p>
                                <button className=" m-5 btn btn-secondary">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Reviews;