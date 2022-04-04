import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between nav z-40'>
            <div className='hidden md:block'>
                <NavLink className={({ isActive }) => isActive ? 'active-link font-sans font-bold text-2xl text-grey-600' : 'link font-sans font-bold text-xl text-grey-600'} to='/'>SPIKE WATCH</NavLink>
            </div>
            <div className='flex gap-2 md:gap-4 text-xl font-bold'>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='/reviews'>Reviews</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='/dashboard'>Dashboard</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='/blogs'>Blogs</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='/about'>About</NavLink>
            </div>
        </div>
    );
};

export default Header;