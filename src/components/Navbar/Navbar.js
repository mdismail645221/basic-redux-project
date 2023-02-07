import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../../assets/images/logo.png'

import '../Navbar/Navbar.css'

const Navbar = () => {
    return (
        <>
           <nav className='menu-container'>
                <a className='logo' href="/">Redux</a>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) =>
                        isActive ? `activeClassName` : undefined
                    }>Home</NavLink></li>
                    <li><NavLink to="/product" className={({ isActive }) => isActive ? `activeClassName` : undefined}>Product</NavLink></li>
                    <li ><NavLink to="/">Save my Product</NavLink></li>
                </ul>
            </nav> 
        </>
    );
};

export default Navbar;