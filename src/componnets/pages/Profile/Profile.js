import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Spinner from '../../shared/Spinner';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [Edit, setEdit] = useState(false)
    const [UpdateValue, setUpdateValue] = useState(false)
    const [Update, setUpdate] = useState({})

    const ProfileEdit = event => {
        event.preventDefault()
        const Education = event.target.Education.value;
        const Address = event.target.Address.value;
        const number = event.target.number.value;
        const Date = event.target.Date.value;
        const Profile = { Education: Education, Address: Address, Number: number, Date: Date }
        if (Profile) {
            fetch(`https://manufacturer-website-server-production-2545.up.railway.app/email/user/${user.email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Profile),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount === 1) {
                        toast.success("Update Profile SuccessFully")
                        event.target.reset()
                        setUpdateValue(true)
                    }
                })
        }
    }
    useEffect(() => {
        fetch(`https://manufacturer-website-server-production-2545.up.railway.app/email/MyProfile/${user?.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem("AssesToken")}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setUpdate(data)

            })
    }, [user?.email, UpdateValue])
    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <div className="bg-gray-100">
                <div className="container mx-auto my-5 p-5">
                    <div className="md:flex no-wrap md:-mx-2 ">

                        <div className="w-full md:w-3/12 md:mx-2">

                            <div className="bg-white p-3 border-t-4 border-green-400">
                                <div className="image overflow-hidden">
                                    <img className="h-auto w-full mx-auto"
                                        src={user?.photoURL}
                                        alt="" />
                                </div>
                                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{user?.displayName}</h1>
                                <h3 className="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
                                <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                    Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                                <ul
                                    className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                    <li className="flex items-center py-3">
                                        <span>Status</span>
                                        <span className="ml-auto"><span
                                            className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                                    </li>
                                    <li className="flex items-center py-3">
                                        <span>Member since</span>
                                        <span className="ml-auto">Nov 07, 2016</span>
                                    </li>
                                </ul>
                                <button onClick={() => setEdit(!Edit)} className="btn mt-10 btn-outline btn-secondary">Edit Profile</button>
                            </div>
                            <div className="my-4"></div>

                        </div>
                        <div className="w-full md:w-9/12 mx-2 h-64">
                            <div className="bg-white p-3 shadow-sm rounded-sm">
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span clas="text-green-500">
                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round"  strokeLinejoin="round" strokeWidth="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span className="tracking-wide">About</span>
                                </div>
                                <div className="text-gray-700">
                                    <div className="grid md:grid-cols-2 text-sm">
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">First Name</div>
                                            <div className="px-4 py-2">{user?.displayName}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Last Name</div>
                                            <div className="px-4 py-2">{user?.displayName}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Gender</div>
                                            <div className="px-4 py-2">Female</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Contact No.</div>
                                            <div className="px-4 py-2">{Update?.Number}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Current Address</div>
                                            <div className="px-4 py-2">{Update?.Address}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Permanant Address</div>
                                            <div className="px-4 py-2">{Update?.Address}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Email.</div>
                                            <div className="px-4 py-2">
                                                <a className="text-blue-800" href="mailto:jane@example.com">{user?.email}</a>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Birthday</div>
                                            <div className="px-4 py-2">{Update?.Date}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Education</div>
                                            <div className="px-4 py-2">{Update?.Education}</div>
                                        </div>
                                    </div>
                                    {
                                        Edit && <div className='w-full mx-auto my-10'>
                                            <form onSubmit={ProfileEdit} className='md:w-[50%] mx-auto'>
                                                <div className="md:flex items-center mt-12">
                                                    <div className="md:w-72 flex flex-col">
                                                        <label className="text-base font-semibold leading-none text-gray-800">Education</label>
                                                        <input name='Education'
                                                            type="name"
                                                            placeholder='Education'
                                                            className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 " required />
                                                    </div>
                                                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                                        <label className="text-base font-semibold leading-none text-gray-800">Address</label>
                                                        <input
                                                            type="text"
                                                            name='Address'
                                                            placeholder='Address'
                                                            className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 " required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="md:flex items-center mt-8">
                                                    <div className="md:w-72 flex flex-col">
                                                        <label className="text-base font-semibold leading-none text-gray-800">Phone Number</label>
                                                        <input
                                                            name='number'
                                                            placeholder='Your Number'
                                                            type="number" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200  " required />
                                                    </div>
                                                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                                        <label className="text-base font-semibold leading-none text-gray-800">Date of Birth</label>
                                                        <input
                                                            type="date"
                                                            name="Date"
                                                            className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 " required />
                                                    </div>
                                                </div>

                                                <div className="cursor-pointer flex items-center justify-center w-full">
                                                    <input type='submit' value='SAVE' className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none" />
                                                </div>
                                            </form>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </div >
    );
};

export default MyProfile;