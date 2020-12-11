import React from 'react';
import './styles/BadgeStarsBack.css'
import astronaut from '../images/astronauts.svg'
import badgeHeader from '../images/platziconf-logo.svg'
import {Link} from 'react-router-dom';


const BadgeHome = (Props) => {
  return (
    <React.Fragment>
        <div className='BadgeStarsBack'>
          <div className='container'>
            <div className="row align-items-center">
              <div className="col-5  my-6 py-5">
                <div className="col d-flex justify-content-center">
                  <img src={badgeHeader}  alt="" className='img-fluid'/>
                </div>
                <h1 className='text-light mt-3 d-flex justify-content-center' >PRINT YOUR BADGES</h1>
                <p className='text-light d-flex justify-content-center'>The easiest way yo manage your conference</p>
                <div className="col-12 d-flex justify-content-center">
                  <Link to='/badge/new'>
                    <button type='button' className='btn btn-primary btn-lg'>Start now</button>
                  </Link>
                </div>
              </div>
              <div className="col-6 my-5 py-5">
                <img src={astronaut} alt="astronauts platzi" className='img-fluid'/>
              </div>
            </div>
          </div>
        </div>
    </React.Fragment>
    );
};

export default BadgeHome;