import React, { Component } from 'react';
import './style.scss';
import videoImitationImage from '../../../../assests/video_imitation.png'

export default class Investing_section extends Component{
    render(){
        return (
            <div className="investingSection">
                <div className="investingSectionBackground">
                    <div className="text_part">
                        <h2>OUR AMAZING FEATURES</h2>
                        <h1>INVESTING FOR EVERYONE</h1>
                        <p>We are worldwide investiment company who are commited to the principle of revenue <br/> 
                        maximization and reduction of the financial risks at investing.
                        </p>
                    </div>
                    <img src={videoImitationImage} className="image_part" />
                </div>
            </div>
        )     
    }
}
