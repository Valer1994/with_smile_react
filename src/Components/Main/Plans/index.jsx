import React, { Component } from 'react';
import './style.scss';
import Features_places from '../Plans/Features_places';  
import Investing_section from '../Plans/Investing_section'

export default class Plans extends Component{
    render(){
        return(
            <div className="plans_section">
                <Investing_section/>
                <Features_places/>
            </div>
        )
    }
}