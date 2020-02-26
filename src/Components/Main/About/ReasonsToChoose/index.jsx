import React from 'react'
import { NavLink } from 'react-router-dom';

import { pic } from './pics.jsx'

import { selectLanguage } from '../../../../translate'

import './style.scss'


const Reasons = ({ lang }) => {
    const pics = [
        {path: pic, name: 'available_prices', key: 1}, 
        {path: pic, name: 'proffesional_service', key: 2}, 
        {path: pic, name: 'secure_relax', key: 3}, 
        {path: pic, name: 'reliable_staff', key: 4}, 
        {path: pic, name: 'picturesque_places', key: 5}, 
        {path: pic, name: 'tasty_national_food', key: 6}, 
    ]
    
    
    
    const picsInWhyChooseUs = () => pics.map((item,ind) => (
        <NavLink to={`/${lang}/about${item.key}/${item.name}`}>
            <div 
                key={ind} 
                className='picsContainers' 
            >
                <img src={item.path} alt='why choose us' />
                <p>{selectLanguage(lang)[item.name]}</p>
            </div>
        </NavLink>
    ));
    
   
    return <div className='contain flexible vertical aCenter jBetween'>
                <div className='textContainer'>   
                    <p className='preHeaderText'>{selectLanguage(lang).spend_your_money_in_the_right_way}</p>
                    <h2 className='headerText'>{selectLanguage(lang).why_choose_us}</h2>  
                    <p className='randomText'>{selectLanguage(lang).you_can_choose_your_tours_from}</p>
                </div>
                <div className='allReasons flexible horizontal jAround wrap'>
                    {picsInWhyChooseUs()} 
                </div>
            </div> 
};

export default Reasons;