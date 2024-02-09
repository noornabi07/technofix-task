import React from 'react';
import logo from '../../assets/logo-Technofix.png'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div>
            <Link to="/"><img className='hidden md:block' src={logo} width='100' height='100' alt="Logo" /></Link>
        </div>
    );
};

export default Logo;