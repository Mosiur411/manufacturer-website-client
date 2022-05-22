import React from 'react';
import Reviewsbg from '../../../assets/banner-9.png.webp';
import man from '../../../assets/man-47.jpg.webp';
const Reviews = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto my-16 px-8 mb-16'>
                <h1 className='mb-12 text-4xl text-center text-primary font-bold' >Customar Say</h1>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <div class="card  bg-base-100 shadow-2xl">
                        <div class="card-body">
                            <div class="card-actions justify-center">
                                <div class="avatar">
                                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://api.lorem.space/image/face?hash=3174" />
                                    </div>
                                </div>
                            </div>
                            <p> <span className='text-2xl font-mono text-primary'>"</span> This is good product that i used in the time , its quality is very good and sellar behabior is very nice <span className='text-2xl font-mono text-primary'>"</span></p>
                        </div>
                    </div>

                    <div class="card  bg-base-100 shadow-2xl">
                        <div class="card-body">
                            <div class="card-actions justify-center">
                                <div class="avatar">
                                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://api.lorem.space/image/face?hash=3174" />
                                    </div>
                                </div>
                            </div>
                            <p> <span className='text-2xl font-mono text-primary'>"</span> This is good product that i used in the time , its quality is very good and sellar behabior is very nice <span className='text-2xl font-mono text-primary'>"</span></p>
                        </div>
                    </div>

                    <div class="card  bg-base-100 shadow-2xl">
                        <div class="card-body">
                            <div class="card-actions justify-center">
                                <div class="avatar">
                                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://api.lorem.space/image/face?hash=3174" />
                                    </div>
                                </div>
                            </div>
                            <p> <span className='text-2xl font-mono text-primary'>"</span> This is good product that i used in the time , its quality is very good and sellar behabior is very nice <span className='text-2xl font-mono text-primary'>"</span></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============= =============== */}
            <div className='mt-20'>
                <div style={{ background: `url(${Reviewsbg})`,backgroundPosition:'center',backgroundSize:'cover' }}>
                    <div class="hero">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <img src={man}  alt='' />
                            <div>
                                <h1 class="text-5xl font-bold">Box Office News!</h1>
                                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Reviews;