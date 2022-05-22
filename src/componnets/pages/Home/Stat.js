import React from 'react';
import { AnnotationIcon, DesktopComputerIcon, UserGroupIcon } from '@heroicons/react/outline';
import './HomeCarousel.css'
const Stat = () => {
    return (
        <div className='py-16 overflow-hidden bgImages my-14'>
            <div className=' max-w-7xl mx-auto px-10 pb-10'>
                <h1 className='mb-12 text-4xl text-center text-primary font-bold' >MILLIONS BUSINESS TRUST US</h1>
                <div class="stats shadow glass py-8 w-full">

                    <div class="stat flex justify-around items-center">
                        <div class="stat-figure text-primary w-20 mx-auto">
                            <DesktopComputerIcon></DesktopComputerIcon>
                        </div>
                        <div>
                            <div class="stat-title text-white font-semibold">All Projects</div>
                            <div class="stat-value text-primary">2257+</div>
                            <div class="stat-desc text-white font-semibold">71% more than last month</div>
                        </div>
                    </div>

                    <div class="stat flex justify-around items-center">
                        <div class="stat-figure text-secondary  w-20 mx-auto">
                            <UserGroupIcon></UserGroupIcon>
                        </div>
                        <div>
                            <div class="stat-title text-white font-semibold">Clients</div>
                            <div class="stat-value text-secondary">1839+</div>
                            <div class="stat-desc text-white font-semibold">61% more than last month</div>
                        </div>
                    </div>

                    <div class="stat flex justify-around items-center">
                        <div class="stat-figure w-20 mx-auto text-orange-400">
                            <AnnotationIcon></AnnotationIcon>
                        </div>
                        <div>
                            <div class="stat-title text-white font-semibold">Feedback</div>
                            <div class="stat-value text-orange-400">1205+</div>
                            <div class="stat-desc text-white font-semibold">48% more than last month</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

  
};

export default Stat;