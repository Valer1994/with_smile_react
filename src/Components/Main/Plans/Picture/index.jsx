import React from 'react';

import { Austin, 
    Berlin, 
    Boston, 
    Cambridge, 
    Edinburgh, 
    Geneva, 
    London, 
    New_York, 
    Paris, 
    San_Francisco, 
    Vienna, 
    Zurich } from '../../../../assets'

import './style.scss';

const picture = () => {
    const countries = [
        { path: Austin, name: 'Austin'},
        { path: Berlin, name: 'Berlin'},
        { path: Boston, name: 'Boston'},
        { path: Cambridge, name: 'Cambridge'},
        { path: Edinburgh, name: 'Edinburgh'},
        { path: Geneva, name: 'Geneva'},
        { path: London, name: 'London'},
        { path: New_York, name: 'New York'},
        { path: Paris, name: 'Paris'},
        { path: San_Francisco, name: 'San Francisco'},
        { path: Vienna, name: 'Vienna'},
        { path: Zurich, name: 'Zurich'}
    ]
    const picsInFeatures = () => countries.map((item, index) =>
        <div key={index} className="img_part1">
                <img src={item.path} alt={item.name}/>
                <span>{item.name}</span>
        </div>)
    return (<div className="country_part">
            {picsInFeatures()}
        </div>
    )
}

export default picture