import React, {  } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../shared/Spinner'

const Service = () => { 
    const Navigate = useNavigate()
    const { data:services, isLoading, } = useQuery('service', () => fetch('https://vast-ridge-73699.herokuapp.com/service', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem("AssesToken")}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Spinner></Spinner>
    }
    //https://vast-ridge-73699.herokuapp.com
    // http://localhost:5000/service
    // https://api.github.com/repos/tannerlinsley/react-query
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
                            <button onClick={() => Navigate(`purchasePages/${service._id}`)} className='btn  btn-outline btn-primary'>Buy Now</button>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Service;