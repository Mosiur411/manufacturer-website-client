import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams()
    const [Payment, setPayment] = useState({})
    const { OrderName, OrderImages, email, OrderPrice, Pic: size, Number } = Payment
    useEffect(() => {
        fetch(`http://localhost:5000/service/order/payment/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setPayment(data[0])
                }
                // 
            })
    }, [id])
    return (
        <div className='px-5  md:px-20'>
            <h1 className='text-center text-4xl font-medium text-green-500 py-3'>Product Names : {OrderName}</h1>
            <div class="card card-side bg-base-100 shadow p-10">
                <figure><img className='w-96' src={OrderImages} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Email: {email}</h2>
                    <p>Name: {OrderName}</p>
                    <p>Prices:$ {OrderPrice}</p>
                    <p>Size: {size}</p>
                    <p>Number: {Number}</p>
                    <div class="card-actions justify-end">
                        <label for="my-modal-3" class="btn modal-button">Pay</label>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <div class="card w-96 mx-auto bg-base-100 shadow">
                            <div class="card-body">
                                <h2 class="card-title">{OrderName}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>

                    </div>
                    <div className='text-center py-3'>
                        <button className='btn'>Submit</button>
                    </div>

                </div>
            </div>
            {/* <div className='mt-16'>
                <div class="card w-96 mx-auto bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className='text-center py-3'>
                    <button className='btn'>Submit</button>
                </div>
            </div> */}
        </div >
    );
};

export default Payment;