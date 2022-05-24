import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h1 className='text-center text-4xl p-3 font-serif font-bold text-cyan-500'>Dashboard</h1>
                <div class="divider"> * * * *</div>
                <div className='px-5'>
                    <Outlet />
                </div>
            </div>
            <div class="drawer-side  shadow-2xl">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content gap-5">
                    <li><NavLink to=''>My Orders</NavLink></li>
                    <li> <NavLink to='addReview'>Add Review</NavLink></li>
                    <li> <NavLink to='myProfile'>My Profile</NavLink></li>
                    <li> <NavLink to='manageOrder'>Manage Order</NavLink></li>
                    <li> <NavLink to='addProduct'>Add Product</NavLink></li>
                    <li><NavLink to='manageProducts'>Manage Products</NavLink></li>
                    <li><NavLink to='makeAdmin'>Make Admin</NavLink></li>
                </ul>

            </div>
        </div>

    );
};

export default Dashboard;