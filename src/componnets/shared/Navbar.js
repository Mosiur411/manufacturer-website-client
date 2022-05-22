import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png'
const Navbar = () => {
    const NavbarMenu = [
        <li key='1'><NavLink to='/'>Home</NavLink></li>,
        <li key='2'><NavLink to='/blog'>Blog</NavLink></li>
    ]
    const Profile = [
        <li key='1'><NavLink to='/myProfile'>My Profile</NavLink></li>,
        <li key='2'><NavLink to='/logout'>Logout</NavLink></li>
    ]
    return (
        <div className="navbar bg-white shadow md:px-20 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {NavbarMenu}
                    </ul>
                </div>
                <Link to='/'><img src={logo} className='w-28'  alt="Logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-5">
                    {NavbarMenu}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" alt='images' />
                        </div>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                       {Profile}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;