import React, { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-toastify';
const ManageOrder = () => {
    const [Manages, setManages] = useState([])
    useEffect(() => {
        fetch(`https://manufacturer-website-server-production-2545.up.railway.app/service/Order/ALL`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem("AssesToken")}`
            },
        })
            .then(response => response.json())
            .then(data => {
                setManages(data)
            })
    })
    const ManagesOrderDelete = (id) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure Delete.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        fetch(`https://manufacturer-website-server-production-2545.up.railway.app/service/Order/ALLdelete/${id}`, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })
                            .then(response => response.json())
                            .then(data => {
                                toast.success("SuccessFully Delete")
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
    const Pending = (id) => {
        fetch(`https://manufacturer-website-server-production-2545.up.railway.app/service/Order/pending/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <h1 className='text-4xl font-bold text-center py-4'>Manage Order</h1>
            <div>
                <div className="overflow-x-auto shadow-2xl">
                    <table className="table w-full text-center">
                        <thead >
                            <tr>
                                <th>COUNT</th>
                                <th>IMAGES</th>
                                <th>NAME</th>
                                <th>SIZE</th>
                                <th>PRICES</th>
                                <th>PAYMENT</th>
                                <th>Cancel</th>
                            </tr>
                        </thead>
                        <tbody className='font-medium'>
                            {
                                Manages?.map((Manage, index) => <tr key={Manage._id}>
                                    <td>{index + 1}</td>
                                    <td><img className='w-20 rounded-full ' src={Manage.OrderImages} alt="Product images" /></td>
                                    <td className='text-secondary font-bold'>{Manage.OrderName}</td>
                                    <td>{Manage.Pic}</td>
                                    <td>$ {Manage.OrderPrice}</td>
                                    <td>{Manage.paid ? <button className="btn btn-primary" onClick={() => Pending(Manage._id)}>{Manage?.shift ? <span >Shift</span> : <span >Pending</span>}</button> : <span className='text-red-400'>Not Payment</span>}</td>
                                    <td onClick={() => ManagesOrderDelete(Manage._id)}><span>
                                        <button className="btn btn-circle btn-outline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </span></td>
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

export default ManageOrder;