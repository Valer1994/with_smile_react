import React, { Component } from 'react';
import './style.scss';
import { Austin, Berlin, Boston, Cambridge, Edinburg, Geneva, London, New_York, Paris, San_Francisco, Vienna, Zurich } from './picture'

export default class Picture extends Component{
    render(){
        const pictureOfCountry = [Austin, Berlin, Boston, Cambridge, Edinburg, Geneva, London, New_York, Paris, San_Francisco, Vienna, Zurich];
        const namesOfCountry = ["Austin", "Berlin", "Boston", "Cambridge", "Edinburg", "Geneva", "London", "New York", "Paris", "San Francisco", "Vienna", "Zurich"];
        const picsInFeatures = () => pictureOfCountry.map((item, index) =>
            <div key={index} className="img_part1">
                    <img src={item} alt=""/>
                    <span>{namesOfCountry[index]}</span>
            </div>)
        return (<div className="contry_part">
            {picsInFeatures()}
            </div>
            
        )
    }
}
