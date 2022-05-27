import React, { } from 'react';
import photo from '../../../assets/myphoto.jpg'

const Profile = () => {
   




    return (
        <div className='w-full '>
            <div className=' mt-12'>
                <div className=" max-w-6xl mx-auto">
                    <h1 className=' text-3xl font-semibold text-primary ml-7 uppercase'>My Profile</h1>
                    <hr className='h-[1px] w-5/12 border-green-500 mt-3 mb-12 ml-7' />
                </div>
                <div>
                    <div className=' max-w-7xl mx-auto '>
                        <div className='w-10/12 mx-auto border border-green-400 mb-12  text-center py-8 rounded-xl'>
                            <div className="avatar ">
                                <div className="w-24 rounded-full ">
                                    <img src={photo} alt='My images' />
                                </div>
                            </div>
                            <br />
                            <h1 className='text-gray-600 text-md mt-5 font-semibold uppercase'>Mosiur islam</h1>
                            <p className=' text-gray-500 text-sm'>mosiurislam411@gmail.com</p>
                            <br />
                            <hr className=' mt-4 w-10/12 mx-auto' />
                            <div className='mt-7'>
                                <h1 className=' text-green-800 font-mono'>INFO</h1>
                                <hr className=' w-2/12 mb-3 border-green-800 mx-auto' />
                                <div>
                                    <h1 className=' text-sm font-semibold'>Education : <span className=' text-green-800 text-sm ml-2'> HSC</span></h1>
                                    <h1 className=' text-sm font-semibold'>Address : <span className=' text-green-800 text-sm ml-2'>Mthapukur,Rangpur</span></h1>
                                    <h1 className=' text-sm font-semibold'>Date-Of-Birth : <span className=' text-green-800 text-sm ml-2'>03/03/2003</span> </h1>
                                    <h1 className=' text-sm font-semibold'>Phone : <span className=' text-green-800 text-sm ml-2'>01318140516</span></h1>
                                </div>

                            </div>

                            <div className='mt-7'>
                                <h1 className=' text-green-800 font-mono'>PROJECT LINK</h1>
                                <hr className=' w-2/12 mb-3 border-green-800 mx-auto' />
                                <div>
                                    <h1 className=' text-sm font-semibold'>1. <span className=' text-purple-800 text-sm ml-2'>https://car-inventory-8eac9.web.app/ </span></h1>
                                    <h1 className=' text-sm font-semibold'>2. <span className=' text-purple-800 text-sm ml-2'>https://foodball-6ef7c.web.app/</span> </h1>
                                    <h1 className=' text-sm font-semibold'>3. <span className=' text-purple-800 text-sm ml-2'>https://chimerical-puppy-4e9841.netlify.app</span>  </h1>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;