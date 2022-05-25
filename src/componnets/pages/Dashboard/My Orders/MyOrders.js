import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const Navigate=useNavigate()
    const [UserOrder, setUserOrder] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/service/order/user/${user.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                setUserOrder(data)
            })
    }, [user])
    return (
        <div>
            <h1>myOrders</h1>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full text-center">
                        <thead className=''>
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
                        <tbody>
                            {
                                UserOrder.map((myOrder,index) => <tr key={myOrder._id}>
                                    <th>{index+1}</th>
                                    <th><img className='w-24 rounded-full ' src={myOrder.OrderImages} alt="Images" /></th>
                                    <th>{myOrder.OrderName}</th>
                                    <th>{myOrder.Pic}</th>
                                    <th>$ {myOrder.OrderPrice}</th>
                                    <th><button  onClick={()=>Navigate(`payment/${myOrder._id}`)} class="btn btn-link">Payment</button></th>
                                    <th><button class="btn btn-ghost">Cancel</button></th>
                                    
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