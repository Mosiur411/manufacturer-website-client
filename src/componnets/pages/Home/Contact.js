import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
    const [name, setNmae] = useState()
    const [email, setemail] = useState()
    const [Company, setCompany] = useState()
    const [Country, setCountry] = useState()
    const [Message, setMessage] = useState()

    const Sumbit = (name, email, Company, Country, Message) => {
        if (name && email && Company && Country && Message) {
            toast.success("Pleass Check Your Email")
        } else {
            toast.error("Srroy Input Faile")
        }

    }
    return (
        <div
        data-aos="flip-up"
        className="bg-gradient-to my-40">
            <div className="w-full flex items-center justify-center my-12">
                <div className=" top-40 bg-white shadow-2xl rounded-3xl py-12 lg:px-28 px-8 ">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-secondary">Contact Pages</p>
                    <div className="md:flex items-center mt-12">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base  leading-none text-gray-800">Name</label>
                            <input onChange={(e) => setNmae(e.target.value)} tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3  outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base  leading-none text-gray-800">Email Address</label>
                            <input onChange={(e) => setemail(e.target.value)} tabIndex={0} arial-label="Please input email address" type="email" className="text-base leading-none text-gray-900 p-3  focus:border-indigo-700 mt-4 bg-gray-100 border  outline-none  rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base  leading-none text-gray-800">Company name</label>
                            <input onChange={(e) => setCompany(e.target.value)} tabIndex={0} arial-label="Please input company name" type="name" className="text-base leading-none text-gray-900 p-3  focus:border-indigo-700 mt-4 bg-gray-100 border  outline-none  rounded border-gray-200 placeholder-gray-100 " placeholder="Please input company name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base  leading-none text-gray-800">Country</label>
                            <input onChange={(e) => setCountry(e.target.value)} tabIndex={0} arial-label="Please input country name" type="name" className="text-base leading-none text-gray-900 p-3  focus:border-indigo-700 mt-4 bg-gray-100 border  outline-none  rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="text-base  leading-none text-gray-800">Message</label>
                            <textarea onChange={(e) => setMessage(e.target.value)} tabIndex={0} aria-label="leave a message" type="name" className="h-36 text-base leading-none text-gray-900 p-3  focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200  outline-none  placeholder-gray-100 resize-none" defaultValue={""} />
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full">
                        <button onClick={() => Sumbit(name, email, Company, Country, Message)} className="mt-9 text-base  leading-none text-white py-4 px-10 bg-primary rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;