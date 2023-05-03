import React from 'react';
import Header from '../pages/Home/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <ToastContainer></ToastContainer>
            <div className='min-h-[calc(100vh-250px)]'>
          <Outlet></Outlet>
          </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;