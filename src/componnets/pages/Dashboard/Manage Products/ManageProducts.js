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
            <h1 className='text-center font-mono text-3xl text-green-600'>Manage Products</h1>
            <div className='text-center'>
                <div class="overflow-x-auto text-cente">
                    <table class="table table-zebra w-full">
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
                        <tbody>
                            {
                                services.map((service, index) => <tr key={service._id}>
                                    <th>{index + 1}</th>
                                    <td><img className='rounded-full w-16 ' src={service.images} alt="images" /></td>
                                    <td>{service.name}</td>
                                    <td>{service.AvailableStok}</td>
                                    <td>${service.prices}</td>
                                    <td><button onClick={() => ManageProductsDelete(service._id)} class="btn btn-outline btn-secondary">Button</button></td>

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