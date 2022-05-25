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
            },
        })
            .then(response => response.json())
            .then(data => {
                setServices(data)
            })
    },[])
    return (
        <div>
            <h1 className=' my-20 text-4xl text-center text-primary font-bold'>BEST SELLER PRODUCT</h1>
            <div className=' max-w-7xl mx-auto px-10 grid grid-cols-3 gap-5 my-10'>
                {
                    services.map(service => <div className="card bg-base-100 shadow-xl">
                        <div className='w-full h-48 bg-red-800 '>
                            <img className='w-full h-48' src={service.images} alt="Shoes" />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-center">
                                {service.name}
                            </h2>
                            <p>Available Stok : <span>{service.AvailableStok}</span></p>
                            <p>Order Quantity : <span>{service.Quantity}</span></p>
                            <p>Price:$ {service.prices}</p>
                            <p>Description:{service.Message}</p>
                            <button onClick={()=>Navigate(`purchasePages/${service._id}`)} className='btn'>Buy Now</button>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Service;