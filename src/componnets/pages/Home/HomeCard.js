import React from 'react';
import banner from '../../../assets/banner-42.jpg.webp'
const HomeCard = () => {
    return (
        <div>
            <div class="hero  bg-base-100">
                <div class="hero-content flex-col lg:flex-row gap-10">
                    <img src={banner} className='rounded' alt='' />
                    <div>
                        <h1 className='m-5 text-3xl font-bold font-serif'>YOU’LL BE HAPPY TO SEE OUR AWESOME</h1>
                        <h1 className='m-5 text-3xl font-bold text-primary font-serif'>FEATURES.</h1>
                        <p className='m-5 font-bold text-slate-600'>Sale 20% off your Collection days</p>
                        <button class=" m-5 btn btn-secondary">Button</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;