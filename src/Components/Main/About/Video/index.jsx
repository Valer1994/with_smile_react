import React from 'react'
import { withRouter } from 'react-router-dom'
import {selectLanguage} from '../../../../translate'
import './style.scss'

const Video = ({lang}) => {
    return <div className='contain flexible vertical aCenter'>
        <div className='textContainer'>   
            <p className='preHeaderText'>{selectLanguage(lang).our_amazing_features}</p>
            <h2 className='headerText'>{selectLanguage(lang).travel_for_everyone}</h2>  
            <p className='randomText'>{selectLanguage(lang).our_tour_company_can_implement_all_your_imaginations}</p>
        </div>
        <div className='mainVideo'>
            <iframe src="https://www.youtube.com/embed/8ayLKN__kCU" frameBorder="0" allow="autoplay; encrypted-media" title='unique-title' allowFullScreen></iframe>
        </div>
    </div>
}

export default withRouter(Video)