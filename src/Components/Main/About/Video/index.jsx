import React from 'react'
import { withRouter } from 'react-router-dom'
import {selectLanguage} from '../../../../translate'
import '../style.scss'

const Video = ({lang}) => {
    return <div className='contain flexible vertical aCenter'>
        <div className='textContainer'>   
            <p className='preHeaderText'>{selectLanguage(lang).our_amazing_features}</p>
            <h2 className='headerText'>{selectLanguage(lang).travel_for_everyone}</h2>  
            <p className='randomText'>We are worldwide investment company who are committed to the principle of revenue maximization and reduction of the financial risks at investing</p>
        </div>
        <div className='mainVideo'>
            <iframe src="https://www.youtube.com/embed/8ayLKN__kCU" frameBorder="0" allow="autoplay; encrypted-media" title='unique-title' allowFullScreen></iframe>
        </div>
    </div>
}

export default withRouter(Video)