import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageProducts = () => {
    const [services, setServices] = useState([])
    const [Delete, setDelete] = useState(false)
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
            })
    }, [Delete])
    const ManageProductsDelete = id => {
        fetch(`http://localhost:5000/service/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    toast("Delete SuccessFully")
                    setDelete(true)
                }
            })
    }
    return (
        <div>
            <h1 className='text-center font-bold my-4 text-3xl '>Manage Products</h1>
            <div className='text-center'>
                <div className="overflow-x-auto text-center shadow-2xl">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>COUNT</th>
                                <th>IMAGES</th>
                                <th>NAME</th>
                                <th>AvailableStok</th>
                                <th>PRICES</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody className='font-medium'>
                            {
                                services.map((service, index) => <tr key={service._id}>
                                    <th>{index + 1}</th>
                                    <td><img className='rounded-full w-16 ' src={service.images} alt="images" /></td>
                                    <td className='text-secondary'>{service.name}</td>
                                    <td>{service.AvailableStok}</td>
                                    <td>${service.prices}</td>
                                    <td><button onClick={() => ManageProductsDelete(service._id)}>
                                    <button className="btn btn-circle btn-outline hover:bg-red-600 hover:border-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;