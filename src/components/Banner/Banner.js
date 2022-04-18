import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-text'>
            <h1 className='banner-title fw-bold text-white' style={{fontSize: '80px'}}>The Rock</h1>
            <p className='fw-bold text-white opacity-50' style={{fontSize: '40px'}}>Personal Trainer</p>
            </div>
        </div>
    );
};

export default Banner;