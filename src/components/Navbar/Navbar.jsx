import React from 'react';
import Container from '../Container/Container';
import Logo from './Logo';
import Search from './Search';
import MenuDropdown from './MenuDropdown';


const Navbar = () => {
    return (
        <div className='fixed w-full bg-white z-10'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className='flex flex-row items-center gap-3 md:gap-0 justify-between'>
                        <Logo></Logo>
                        <Search></Search>
                        <MenuDropdown></MenuDropdown>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;