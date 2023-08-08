/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='font-bold text-2xl m-12 bg-gray-900 p-10 flex gap-24 text-white'>
            <Link to="/">Home</Link>
            <Link to="/players">Players</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default Header;