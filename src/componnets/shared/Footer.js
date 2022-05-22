import React from 'react';
import logo from '../../assets/Logo.png'
const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img className='w-32 mx-auto' src={logo} alt="" />
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover" >Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>

            </footer>
            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <p>Copyright © {year} - All right reserved by ACME Industries Ltd</p>
            </div>
        </>

    );
};

export default Footer;