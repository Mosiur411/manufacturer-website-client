import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [UserAdmin, setUserAdmin] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:5000/email/admin/${user.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization':`Bearer ${localStorage.getItem("AssesToken")}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.Admin === 'role') {
                    setUserAdmin(true)
                }
            })
    }, [user])
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className='text-center text-4xl p-3 font-serif font-bold text-secondary'>Dashboard</h1>
                <div className="divider"> * * * *</div>
                <div className='px-5'>
                    <Outlet />
                </div>
            </div>
            <div className="drawer-side  shadow-2xl">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content gap-5">
                    {
                        UserAdmin ? ' ':<ul>
                            <li><NavLink to=''>My Orders</NavLink></li>
                            <li> <NavLink to='addReview'>Add Review</NavLink></li>
                            <li> <NavLink to='myProfile'>My Profile</NavLink></li>
                        </ul>
                    }
                    {
                        UserAdmin && <ul>
                            <li> <NavLink to='manageOrder'>Manage Order</NavLink></li>
                            <li> <NavLink to='addProduct'>Add Product</NavLink></li>
                            <li><NavLink to='manageProducts'>Manage Products</NavLink></li>
                            <li><NavLink to='makeAdmin'>Make Admin</NavLink></li>
                        </ul>
                    }
                </ul>

            </div>
        </div>

    );
};

export default Dashboard;