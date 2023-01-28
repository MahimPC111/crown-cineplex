import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='flex justify-between items-center px-7 py-5'>
            <div>
                <p className="text-xl md:text-3xl lg:text-4xl font-semibold">
                    <span className='text-blue-500 mr-2'>Crown</span>
                    <span className='text-green-500'>Cineplex</span>
                </p>
            </div>
            <div>
                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/'>Home</NavLink>
                <NavLink className='ml-2 md:ml-3 lg:ml-4' to='/about'>About</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;
