import React from 'react';
import './style.scss'
import Video from './Video/index'
import Reasons from './ReasonsToChoose/index'

const About = () => {
    return <div className='contain flexible vertical aCenter'> 
        <Reasons />
        <Video />
    </div>
    
}

export default About;