/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <p>Home page ...</p>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;