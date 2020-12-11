import React from 'react';
//imbrl
import { Link } from 'react-router-dom'

import './styles/BadgeStarsBack.css';
import NF from '../images/error-amico.svg'

const NotFound = (params) => {
  return(
    <>
      <div className="BadgeStarsBack">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-6 align-self-center">
              <img src={NF} alt="" className='img-fluid'/>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-8 align-self-center">
                <h1 className='text-light'>Hmmm!</h1>
                <h3 className='text-light'>We Didn't find what you were looking for</h3>
                <Link to='/'>
                  <button className='btn btn-primary ml-5'>Go Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound