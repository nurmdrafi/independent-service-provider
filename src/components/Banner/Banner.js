import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='d-flex flex-column align-items-center justify-content-center' style={{height: '750px'}}>
            <h1 className='fw-bold text-white' style={{fontSize: '100px'}}>The Rock</h1>
            <p className='fw-bold text-white opacity-50' style={{fontSize: '40px'}}>Personal Trainer</p>
            </div>
        </div>
    );
};

export default Banner;