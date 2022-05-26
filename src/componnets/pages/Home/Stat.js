import React from 'react';
import banner from '../../../assets/banner-26.jpg.webp'
import { AnnotationIcon, DesktopComputerIcon, UserGroupIcon } from '@heroicons/react/outline';
const Stat = () => {
    return (
        <div style={{ background: `url(${banner})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className='py-16 overflow-hidden my-14'>
            <div className=' max-w-7xl mx-auto px-10 pb-10'>
                <h1 className='mb-12 text-4xl text-center text-secondary font-bold' >MILLIONS BUSINESS TRUST US</h1>
                <div className="stats shadow glass py-8 w-full">

                    <div className="stat flex justify-around items-center">
                        <div className="stat-figure text-primary w-20 mx-auto">
                            <DesktopComputerIcon></DesktopComputerIcon>
                        </div>
                        <div>
                            <div className="stat-title text-white ">All Projects</div>
                            <div className="stat-value text-primary">2257+</div>
                            <div className="stat-desc text-white ">71% more than last month</div>
                        </div>
                    </div>

                    <div className="stat flex justify-around items-center">
                        <div className="stat-figure text-secondary  w-20 mx-auto">
                            <UserGroupIcon></UserGroupIcon>
                        </div>
                        <div>
                            <div className="stat-title text-white ">Clients</div>
                            <div className="stat-value text-secondary">1839+</div>
                            <div className="stat-desc text-white ">61% more than last month</div>
                        </div>
                    </div>

                    <div className="stat flex justify-around items-center">
                        <div className="stat-figure w-20 mx-auto text-orange-400">
                            <AnnotationIcon></AnnotationIcon>
                        </div>
                        <div>
                            <div className="stat-title text-white ">Feedback</div>
                            <div className="stat-value text-orange-400">1205+</div>
                            <div className="stat-desc text-white ">48% more than last month</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

  
};

export default Stat;