import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PurchasePages = () => {
    const { id } = useParams()
    const [Services, setServices] = useState({})
    const { name, images, AvailableStok, Quantity, prices, Message } = Services
    useEffect(() => {
        fetch(`http://localhost:5000/service/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(Profile),
        })
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [id])
    return (
        <div>
            <h1 className='text-center text-4xl font-medium text-green-500 py-3'>Product Names : {name}</h1>
            <div className=''>
                <div>
                    <div><img src={images} alt="Product Images"/></div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default PurchasePages;