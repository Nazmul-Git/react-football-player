/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Players = ({ player }) => {
    const { id, name, image, position, price } = player;
    return (
        <div className='relative p-6 m-6'>          
            <img src={image} className='h-72 w-80' alt="" />   
            <h2 className='font-semibold text-2xl mt-4'>{name}</h2>   
            <p className='font-semibold text-xl'>{price}</p>   
            <p className='text-3xl mt-3 font-bold font-serif mb-14'>{position}</p>  
            <div className='bg-orange-500 absolute bottom-0 mb-4 w-80 text-center'>
                <Link className=' font-sans text-4xl font-extrabold' to={`/players/${id}`}>Details</Link>
            </div>
        </div>
    );
};

export default Players;