import { signOut } from 'firebase/auth';
import React, { } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../assets/Logo.png'
import auth from '../../firebase.init';
import Spinner from './Spinner';
const Navbar = () => {
    /* ================= auth =================== */
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <Spinner></Spinner>;
    }
    const logout = () => {
        toast.success("SuccessFully Logout")
        signOut(auth);
        localStorage.removeItem('AssesToken')
    };
    /*======================== Router Link ==================== */
    const NavbarMenu = [
        <li key='1'><NavLink to='/'>Home</NavLink></li>,
        <li key='2'><NavLink to='profile'>Profile</NavLink></li>,
        <li key='3'><NavLink to='/blog'>Blog</NavLink></li>,
        <li key='4'>{user && <NavLink to='/dashboard'>Dashboard</NavLink>}</li>,
        <label key='5' htmlFor="my-drawer-2" className='btn mt-14 btn-primary-content lg:hidden'>Open Dashboard</label>
    ]
    const Profile = [
        <li key='1'><NavLink to='dashboard/myProfile'>My Profile</NavLink></li>,
        <li onClick={logout} key='2'><NavLink to='/'>Logout</NavLink></li>
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
                <Link to='/'><img src={logo} className='w-28' alt="Logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-5">
                    {NavbarMenu}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.photoURL ? <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} alt='images' />
                            </div>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {Profile}
                        </ul>
                    </div> : <button className='btn btn-outline btn-primary'>
                        <Link to='/login'>Login</Link>
                    </button>
                }

            </div>
        </div>
    );
};

export default Navbar;