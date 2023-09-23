import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/newMissLimHome.webp';
import '../styles/Home.css';

function Home(){
 return(
    <div className='home' style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer'>
         <h1>Leaders Ignite and Manifest</h1>
         <p>Purpose directs passion and passion ignites purpose</p>
          <Link to ="/contestants">
          <button>
            Check Your Contestants
          </button>
         </Link>
      </div>
    </div>
 )
}

export default Home