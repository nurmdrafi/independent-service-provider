import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, price, time, image, description} = service;
    return (
        <div className="col my-3 my-md-2">
        <div className="card mx-auto" style={{width: '85%'}}>
          <img src={image} className="service-img" alt="{name}"/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h1 className='fw-bold'>{price}/ <small>{time}</small> </h1>
            <p className="card-text">{description}</p>
          </div>
          <button className='service-btn'>Apply Now</button>
        </div>
      </div>
    );
};

export default Service;