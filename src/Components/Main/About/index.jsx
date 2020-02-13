import React from 'react';
import Video from './Video/index';
import Reasons from './ReasonsToChoose/index';
import AboutOurTravel from './AboutOurTravel/';
import { withRouter } from 'react-router-dom';
import './style.scss'

const About = ({lang}) => {
    return <div className='contain_vertical'> 
        <AboutOurTravel lang={lang}/>
        <Reasons lang={lang}/>
        <Video lang={lang}/>
    </div>
    
}

export default withRouter(About);
