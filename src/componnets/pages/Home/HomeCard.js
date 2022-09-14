import React from 'react';
import banner from '../../../assets/banner-42.jpg.webp'
const HomeCard = () => {
    return (
        <div>
            <div className="hero  bg-base-100">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img  data-aos="zoom-in" src={banner} className='rounded' alt='Banner images' />
                    <div data-aos="zoom-in-left">
                        <h1 className='m-5 text-3xl font-bold '>YOU’LL BE HAPPY TO SEE OUR AWESOME</h1>
                        <h1 className='m-5 text-3xl font-bold text-secondary '>FEATURES.</h1>
                        <p className='m-5 font-bold text-slate-600'>Sale 20% off your Collection days</p>
                        <button className=" m-5 btn btn-primary">Button</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;