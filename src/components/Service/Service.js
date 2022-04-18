import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
const {id, name, price, time, image, description} = service;

 const navigate = useNavigate()
	const navigateToCheckOut = (id) =>{
		navigate(`/checkout/${id}`)
	}
    return (
        <div className="col my-3 my-md-2">
        <div className="card mx-auto" style={{width: '85%'}}>
          <img src={image} className="service-img" alt="{name}"/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h1 className='fw-bold'>{price}<span className='fw-lighter'>/</span><small className='fw-light'>{time}</small></h1>
            <p className="card-text">{description}</p>
          </div>
        <button className='service-btn' onClick={() => navigateToCheckOut(id)}>Order Now</button>
        </div>
      </div>
    );
};

export default Service;