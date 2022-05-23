import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h1 className='text-center text-4xl p-3 font-serif font-bold text-cyan-500'>Dashboard</h1>
                <div class="divider"> * * * *</div>

            </div>
            <div class="drawer-side  shadow-2xl">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
                    <li>Hi</li>
                </ul>

            </div>
        </div>

    );
};

export default Dashboard;