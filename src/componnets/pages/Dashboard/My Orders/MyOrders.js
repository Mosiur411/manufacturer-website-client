import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
const MyOrders = () => {
    const [user] = useAuthState(auth);
    const Navigate = useNavigate()
    const [UserOrder, setUserOrder] = useState([])
    useEffect(() => {
        fetch(`https://manufacturer-website-server-production-2545.up.railway.app/service/order/user/${user.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem("AssesToken")}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setUserOrder(data)
                }
            })
    }, [user])
    const MyOrderDelete = (id) => {

        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure Delete.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        fetch(`https://manufacturer-website-server-production-2545.up.railway.app/service/payment/delete/${id}`, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })
                            .then(response => response.json())
                            .then(data => {
                                if (data) {
                                    toast.success("SuccessFully Delete")
                                }
                            })
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        toast("Note Delete")
                    }
                }
            ]
        });

    }
    return (
        <div>
            <h1 className='text-3xl my-5 font-bold text-center'>My Orders</h1>
            <div>
                <div className="overflow-x-auto shadow-2xl">
                    <table className="table w-full text-center">
                        <thead className=''>
                            <tr>
                                <th>COUNT</th>
                                <th>IMAGES</th>
                                <th>NAME</th>
                                <th>SIZE</th>
                                <th>PRICES</th>
                                <th>PAYMENT</th>
                                <th>Cancel/Tnx</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                UserOrder.map((myOrder, index) => <tr key={myOrder._id}>
                                    <th>{index + 1}</th>
                                    <th><img className='w-24 rounded-full ' src={myOrder.OrderImages} alt="Images" /></th>
                                    <th className='text-secondary'>{myOrder.OrderName}</th>
                                    <th>{myOrder.Pic}</th>
                                    <th>$ {myOrder.OrderPrice}</th>
                                    {
                                        myOrder.paid && <th className="text-secondary">Paid</th>
                                    }
                                    {
                                        !myOrder.paid && <th><button onClick={() => Navigate(`payment/${myOrder._id}`)} className="btn btn-link">Payment</button></th>
                                    }
                                    <th>{myOrder?.paid ? <th>{myOrder.user.id.slice(0, 6)}..</th> : <button onClick={() => MyOrderDelete(myOrder?._id)} >
                                        <button className="btn btn-circle btn-outline hover:bg-red-600 hover:border-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </button>
                                    }</th>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;