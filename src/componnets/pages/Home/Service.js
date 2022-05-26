import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Service = () => {
    const [services, setServices] = useState([])
    const Navigate=useNavigate()
    useEffect(() => {
        fetch('http://localhost:5000/service', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization':`Bearer ${localStorage.getItem("AssesToken")}`
            },
        })
            .then(response => response.json())
            .then(data => {
                setServices(data)
                console.log(data)
            })
    },[])
    return (
        <div>
            <h1 className=' my-20 text-4xl text-center text-secondary font-bold'>## My Services ##</h1>
            <div className=' max-w-7xl mx-auto px-3 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10'>
                {
                    services?.map(service => <div key={service?._id} className="card bg-base-100 shadow-2xl">
                        <div className='w-full h-56 border-b-2 '>
                            <img className='w-full h-full p-5 rounded-xl' src={service.images} alt="Shoes" />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-center text-2xl font-medium text-slate-900">
                                {service.name}
                            </h2>
                            <p className='font-medium text-slate-600'>Available Stok : <span>{service.AvailableStok}</span></p>
                            <p className='font-medium text-slate-600'>Order Quantity : <span>{service.Quantity}</span></p>
                            <p className='font-medium text-slate-600'>Price:$ {service.prices}</p>
                            <p className='font-medium text-slate-400'>Description:{service.Message}</p>
                            <button onClick={()=>Navigate(`purchasePages/${service._id}`)} className='btn  btn-outline btn-primary'>Buy Now</button>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Service;