import React, { Component } from 'react';
import Button from '../Button/';
import BannerImg from '../../../../images/Bannerbg.png';

import './style.scss';

const Banner = () => {
    return <div className = 'flexible aCenter'>
        <div className='Banner flexible vertical aStart'> 
            <span className = 'BannerMiniTitle'>TRAVEL HYIP</span>
            <span className = 'BannerBigTitle'>INVESTMENT</span>
            <span className = 'BannerText'>A Profitable Platform For High-Margin <br/> Travel investment</span>
            <Button />
        </div>
        <img className = 'BannerImg' src = {BannerImg}></img>
    </div>

}

export default Banner;