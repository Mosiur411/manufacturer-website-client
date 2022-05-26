import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const PurchasePages = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams()
    const[ServicesUpdate,setServicesUpdate]=useState(false)
    const [Services, setServices] = useState({})
    const { name, images, AvailableStok, Quantity, prices, Message } = Services
    useEffect(() => {
        fetch(`https://vast-ridge-73699.herokuapp.com/service/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization':`Bearer ${localStorage.getItem("AssesToken")}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [id,ServicesUpdate])
    const Order = (event) => {
        event.preventDefault();
        const Order = event.target.Order.value;
        const Contact = event.target.number.value;
        const Available = parseInt(AvailableStok)
        const value = parseInt(Quantity)
        if (Available >= Order && Order >= value) {
            const StokUpdate = parseInt(AvailableStok) - Order
            if (StokUpdate) {
                fetch(`https://vast-ridge-73699.herokuapp.com/service/Update/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ AvailableStok: StokUpdate }),
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            const email = user.email;
                            const OrderName = name;
                            const OrderImages = images;
                            const OrderPrice = parseInt(prices) * Order;
                            const Pic = Order;
                            const Number = Contact;
                            const ProductOrder = { email, OrderName, OrderImages, OrderPrice, Pic, Number }
                            fetch(`https://vast-ridge-73699.herokuapp.com/service/order`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(ProductOrder),
                            })
                            .then(res=>res.json())
                            .then(data=>{
                                if(data){
                                    toast.success("Successfully Order")
                                    setServicesUpdate(true)
                                    event.target.reset()
                                }
                            })

                        }
                    })
            } else {
                toast.error(`Not Found ${Order}`)
            }
        } else {
            toast.error(`Not Found ${Order}`)
        }

    }
    return (
        <div className='px-5  md:px-20 my-10'>
            <h1 className='text-center text-4xl font-bold text-secondary py-3 mb-10'>Product Names : {name}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 '>
                <div className='p-5 w-[80%] mx-auto shadow-xl rounded-2xl'>
                    <div><img className='w-[100%] mx-auto' src={images} alt="Product Images" /></div>
                    <div className='flex justify-between py-2'>
                        <h1 className='font-medium text-xl text-secondary'>Name: {name}</h1>
                        <h1  className='font-medium text-xl text-secondary'>Prices:$ {prices}</h1>
                    </div>
                    <div className='flex justify-between'>
                        <h1  className='font-medium text-md text-secondary'>AvailableStok: {AvailableStok}</h1>
                        <h1  className='font-medium text-md text-secondary'>Quantity: {Quantity}</h1>
                    </div>
                    <h1  className='text-gray-500'>{Message}</h1>
                </div>
                <div className='p-3 w-[80%] mx-auto shadow-xl rounded-2xl'>
                    <div className='font-medium'>
                        <form onSubmit={Order}>
                            <div className="md:flex items-center mt-12">
                                <div className="md:w-[100%] flex flex-col">
                                    <label className="text-base  leading-none text-gray-800">Product Names</label>
                                    <input
                                        type="name"
                                        value={name}
                                        disabled
                                        className="text-base leading-none text-gray-900 p-3  focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required />
                                    <label className="text-base  leading-none text-gray-800">Email</label>
                                    <input
                                        value={user.email}
                                        type="name"
                                        disabled
                                        className="text-base leading-none text-gray-900 p-3  focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required />
                                    <label className="text-base  leading-none text-gray-800">Contact Number</label>
                                    <input name='number'
                                        type="number"
                                        placeholder='Contact Number'
                                        className="text-base leading-none text-gray-900 p-3  focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 " required />
                                    <label className="text-base  leading-none text-gray-800">Quantity</label>
                                    <input name='Order'
                                        type="number"
                                        placeholder={`Minimum Order ${Quantity}`}
                                        className="text-base leading-none text-gray-900 p-3  focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 " required />

                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <input type='submit' value='SUBMIT' className="mt-9 text-base  leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchasePages;