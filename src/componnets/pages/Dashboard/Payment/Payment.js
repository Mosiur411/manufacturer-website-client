import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1wwjDAYSz72lr1nWsB0uKFEeZD8Fsn8DJsi1GnCoBa3Tcwcyx8pKA9bFiocuR31NlbpOgeOs8nriYtWVKH8M8l00OFtQIs4F');

const Payment = () => {
    const { id } = useParams()
    const [Payment, setPayment] = useState({})
    const { OrderName, OrderImages, email, OrderPrice, Pic: size, Number } = Payment
    useEffect(() => {
        fetch(`https://vast-ridge-73699.herokuapp.com/service/order/payment/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization':`Bearer ${localStorage.getItem("AssesToken")}`
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
            <h1 className='text-center text-4xl font-bold  py-3'>Product Names : {OrderName}</h1>
            <div className="card card-side bg-base-100 shadow-2xl p-10">
                <figure><img className='w-96' src={OrderImages} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Email: {email}</h2>
                    <p>Name: {OrderName}</p>
                    <p>Prices:$ {OrderPrice}</p>
                    <p>Size: {size}</p>
                    <p>Number: {Number}</p>
                    <div className="card-actions justify-end">
                        <label htmlFor="my-modal-3" className="btn btn-primary">Pay</label>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='p-10'>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm MyPayment={Payment}/>
                        </Elements>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Payment;