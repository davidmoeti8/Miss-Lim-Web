import React from 'react';
import AboutImage from '../assets/AboutPic.png';
import '../styles/About.css';
function About() {
    return (
        <div className='about'>
          <div className='aboutTop' style={{ backgroundImage: `url(${AboutImage})` }}></div>
          <div className='aboutBottom'>
            <h1>About us</h1>
            <p>Miss Lim is a South African based pageant competition that aims to highlight the beauty & power of women, and strives to produce role models within our communities. LIM which stands for Leaders Ignite & Manifest was inspired by the modern days of our lives whereby we see women in power, women leading, women holding higher positions in big companies, women embracing their skin, women being the real pillars of strength in many families, unlike in the past when only men were in charge and dominating the work industry.It’s within Miss Lim’s missions to encourage young girls to always Manifest positive things into their lives. Purpose directs passion, and passion Ignites purpose.</p>
          </div>
        </div>
    )
}

export default About;