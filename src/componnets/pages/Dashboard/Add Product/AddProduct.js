import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        const image = data.images[0];
        const formData = new FormData();
        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?key=d8f126949cd18812585609f4e724582e`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result?.data?.url) {
                    const images = result.data?.url;
                    const name = data.name;
                    const AvailableStok = data.AvailableStok;
                    const Quantity = data.Quantity;
                    const prices = data.prices;
                    const Message = data.Message;
                    const addProduct = {
                        images, name, AvailableStok, Quantity, prices,Message
                    }
                    fetch('https://manufacturer-website-server-production-43c1.up.railway.app/services', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(addProduct),
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data) {
                                toast.success('AddProduct SuccessFully')
                                reset()
                            }
                        })
                }

            })
    }
    return (
        <div className="bg-gradient-to">
            <div className="w-full flex items-center justify-center my-12">
                <div className=" top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Add Product</p>
                    {/* ============================== ============================= */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="md:flex items-center mt-12">
                            <div className="md:w-72 flex flex-col">
                                <label className="text-base font-semibold leading-none text-gray-800">Name</label>
                                <input name='name'
                                    type="name"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'your name'
                                        },
                                    }
                                    )}
                                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required />
                            </div>
                            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="text-base font-semibold leading-none text-gray-800">Available Stok</label>
                                <input
                                    type="number"
                                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                                    {...register("AvailableStok", {
                                        required: {
                                            value: true,
                                            message: 'your name'
                                        },
                                    }
                                    )}
                                />
                            </div>
                        </div>
                        <div className="md:flex items-center mt-8">
                            <div className="md:w-72 flex flex-col">
                                <label className="text-base font-semibold leading-none text-gray-800">Order Quantity</label>
                                <input
                                    type="number"
                                    {...register("Quantity", {
                                        required: {
                                            value: true,
                                            message: 'your name'
                                        },
                                    }
                                    )}
                                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " required />
                            </div>
                            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="text-base font-semibold leading-none text-gray-800">Photo</label>
                                <input
                                    type="file"
                                    {...register("images", {
                                        required: {
                                            value: true,
                                            message: 'your name'
                                        },
                                    }
                                    )} className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required />
                            </div>
                        </div>
                        <div className="md:flex items-center mt-8">
                            <div className="md:w-72 flex flex-col">
                                <label className="text-base font-semibold leading-none text-gray-800">Prices</label>
                                <input type="number"
                                    {...register("prices", {
                                        required: {
                                            value: true,
                                            message: 'your name'
                                        },
                                    }
                                    )}
                                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " required />
                            </div>
                            <div></div>
                        </div>
                        <div>
                            <div className="w-full flex flex-col mt-8">
                                <label className="text-base font-semibold leading-none text-gray-800">Message</label>
                                <textarea
                                    {...register("Message", {
                                        required: {
                                            value: true,
                                            message: 'your name'
                                        },
                                    }
                                    )}
                                    className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"  id="" cols="30" rows="5" required></textarea>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <input type='submit' value='SUBMIT' className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none" />
                        </div>
                    </form>
                    {/* ============================== ============================= */}

                </div>
            </div>
        </div>
    );
};

export default AddProduct;