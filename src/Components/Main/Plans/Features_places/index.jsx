import React, { Component } from 'react';
import './style.scss';
import Picture from '../Picture';

export default class Features_places extends Component{
     render(){
            return (
            <div className="featureSection">
                <div className="featureSectionBack">
                    <div className="text_part">
                        <h2>EXPLORE TOP DESTINATION</h2>
                        <h1>OUR FEATURES PLACES</h1>
                        <p id="media_text">We are worldwide investiment company who are commited to the principle of revenue <br/> 
                        maximization and reduction of the financial risks at investing.
                        </p>
                    </div>
                    <Picture/>
                </div> 
                <div className="featureSectionBack2">
                </div> 
            </div>
        )     
    }
}