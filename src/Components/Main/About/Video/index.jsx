import React from 'react'
import '../style.scss'

const Video = () => {
    return <div className='contain flexible vertical aCenter'>
        <div className='textContainer'>   
            <p className='preHeaderText'>Our amazing features</p>
            <h2 className='headerText'>Investing for everyone</h2>  
            <p className='randomText'>We are worldwide investment company who are committed to the principle of revenue maximization and reduction of the financial risks at investing</p>
        </div>
        <div className='mainVideo'>
            <iframe src="https://www.youtube.com/embed/8ayLKN__kCU" frameBorder="0" allow="autoplay; encrypted-media" title='unique-title' allowFullScreen></iframe>
        </div>
    </div>
}

export default Video