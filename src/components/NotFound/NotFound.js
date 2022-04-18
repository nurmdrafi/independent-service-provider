import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found d-flex justify-content-center align-items-center">
      <div>
        <p className='fw-bold fs-3 text-danger'>ERROR 404</p>
        <h2>
          Oops! The page you're <br /> looking for is'nt here.
        </h2>
        <p className='fs-5'>
          You might have the wrong address, or the page <br />
          may have moved.
        </p>
        <Link to="/home">
          <button type="button" className="btn btn-secondary">
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
    );
};

export default NotFound;