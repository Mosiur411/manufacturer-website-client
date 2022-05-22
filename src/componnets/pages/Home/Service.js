import React from 'react';

const Service = () => {
    return (
        <div>
            <h1 className=' my-20 text-4xl text-center text-primary font-bold'>BEST SELLER PRODUCT</h1>
            <div className=' max-w-7xl mx-auto px-10 grid grid-cols-3 gap-5 my-10'>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div  className="card-body">
                        <h2 className="card-title text-center">
                            Shoes
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p>Available Stok : <span>785</span></p>
                        <p>Order Quantity : <span>75</span></p>
                        <button className='btn'>Buy Now</button>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">
                            Shoes
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p>Available Stok : <span>785</span></p>
                        <p>Order Quantity : <span>75</span></p>
                        <button className='btn'>Buy Now</button>
                    </div>
                </div>


                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">
                            Shoes
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <p>Available Stok : <span>785</span></p>
                        <p>Order Quantity : <span>75</span></p>
                        <button className='btn'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;