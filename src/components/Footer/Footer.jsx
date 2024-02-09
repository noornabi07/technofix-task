import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-10'>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <Link to='https://github.com/noornabi07'><FaGithub className='text-3xl font-bold'></FaGithub></Link>
                        <Link to='noornabiprogram07@gmail.com'><MdEmail className='text-3xl font-bold'></MdEmail></Link>
                        <Link to='https://www.linkedin.com/in/md-noornabi-islam-0a239821b/'><FaLinkedinIn className='text-3xl font-bold'></FaLinkedinIn></Link>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2024 - All right reserved by Md Noornabi Islam</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;