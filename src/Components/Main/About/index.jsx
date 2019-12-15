import React from 'react';
import { withRouter } from 'react-router-dom'
import './style.scss'
import Video from './Video/index'
import Reasons from './ReasonsToChoose/index'

const About = ({lang}) => {
    return <div className='contain flexible vertical aCenter'> 
        <Reasons lang={lang}/>
        <Video lang={lang}/>
    </div>
    
}

export default withRouter(About);
