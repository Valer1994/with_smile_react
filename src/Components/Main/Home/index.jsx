import React, { Component } from 'react';
import BannerInfo from './Banner/BannerInfo/display';
import Banner from './Banner/';
 
import './style.scss';

const Home = ({lang}) => {
    return <div className='Home flexible vertical aCenter'> 
            <Banner />  
            <BannerInfo /> 
        </div>
}

export default Home;