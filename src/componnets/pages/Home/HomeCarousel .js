import React from 'react';
import bgVideo from '../../../assets/video/bg- manufactory.mp4'
import helmet from '../../../assets/helmet.webp'
import tester from '../../../assets/tester.webp'

import './HomeCarousel.css'
const HomeCarousel = () => {

    return (
        <div className="video-wrapper">
            <video className='videos' loop autoPlay>
                <source
                    src={bgVideo}
                    type="video/mp4"
                />
            </video>

            <div className="header">
                <div class="carousel w-full mx-auto">
                    <div id="slide1" class="carousel-item relative w-full">
                        <div class="absolute flex justify-around items-center  transform -translate-y-1/2 left-5 right-5 top-1/2 w-full">
                            <div>
                                <h1 className='uppercase text-4xl font-bold text-black mt-16'>Top product <br />hand tool <br /> 2022</h1>
                            </div>
                            <div>
                                <img className='w-96 mx-auto' src={helmet} alt="" />
                            </div>
                        </div>
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" class="btn btn-circle">❮</a>
                            <a href="#slide2" class="btn btn-circle">❯</a>
                        </div>


                    </div>
                    <div id="slide2" class="carousel-item relative w-full">
                        <div class="absolute flex justify-around items-center  transform -translate-y-1/2 left-5 right-5 top-1/2 w-full">
                            <div>
                                <h1 className='uppercase text-4xl font-bold text-black mt-16'>Top product <br />hand tool <br /> 2022</h1>
                            </div>
                            <div>
                                <img className='w-96 mx-auto' src={tester} alt="" />
                            </div>
                        </div>
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" class="btn btn-circle">❮</a>
                            <a href="#slide1" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide1" class="carousel-item relative w-full">
                        <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" alt='' class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" class="btn btn-circle">❮</a>
                            <a href="#slide1" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" class="carousel-item relative w-full">
                        <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" alt='' class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" class="btn btn-circle">❮</a>
                            <a href="#slide1" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCarousel;