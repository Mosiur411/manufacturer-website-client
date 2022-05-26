import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Spinner from '../../../shared/Spinner';
import auth from '../../../../firebase.init';

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
            fetch(`http://localhost:5000/email/user/${user.email}`, {
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
        fetch(`http://localhost:5000/email/MyProfile/${user.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization':`Bearer ${localStorage.getItem("AssesToken")}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setUpdate(data)
                
            })
    },[user.email,UpdateValue])
    if(loading){
        return <Spinner></Spinner>
    }
    return (
        <div>
            <div className='text-center border-2 md:w-[50%] p-2 md:p-5 mx-auto rounded-3xl shadow-xl'>
                <h1 className='w-24  mx-auto'><img className="mask mask-hexagon-2" src={user?.photoURL} alt="Profile" /></h1>
                <h1 className='font-bold text-3xl py-3 '>{user?.displayName}</h1>
                <h1 className='font-normal text-xl py-3 '>{user?.email}</h1>
                {
                    Update && <div>
                        <h1 className='font-medium text-xl py-2 '>Education: {Update?.Education}</h1>
                        <h1 className='font-medium text-xl py-2 '>Address: {Update?.Address}</h1>
                        <h1 className='font-medium text-xl py-2 '>Number: {Update?.Number}</h1>
                        <h1 className='font-medium text-xl py-2 '>Date: {Update?.Date}</h1>
                    </div>
                }
                <button onClick={() => setEdit(!Edit)} className="btn btn-outline btn-secondary">Edit Profile</button>
            </div>
            {
                Edit && <div className='w-full mx-auto mb-10'>
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

                        <div className="flex items-center justify-center w-full">
                            <input type='submit' value='SAVE' className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none" />
                        </div>
                    </form>
                </div>
            }
        </div>
    );
};

export default MyProfile;