import React from 'react'
import { selectLanguage } from '../../../../translate'
import './style.scss'
import { pic } from './pics.jsx'



const Reasons = ({ lang }) => {
    const pics = [
        {path: pic, name: 'available_prices'}, 
        {path: pic, name: 'proffesional_service'}, 
        {path: pic, name: 'secure_relax'}, 
        {path: pic, name: 'reliable_staff'}, 
        {path: pic, name: 'picturesque_places'}, 
        {path: pic, name: 'tasty_national_food'}, 
    ]
    
    
    
    const picsInWhyChooseUs = () => pics.map((item,ind) => (
        <div key={ind} className='picsContainers'>
            <img src={item.path} alt='why choose us' />
            <p>{selectLanguage(lang)[item.name]}</p>
        </div>
    ));
    
   
    return <div className='contain flexible vertical aCenter'>
        <div className='textContainer'>   
            <p className='preHeaderText'>{selectLanguage(lang).spend_your_money_in_the_right_way}</p>
            <h2 className='headerText'>{selectLanguage(lang).why_choose_us}</h2>  
            <p className='randomText'>{selectLanguage(lang).you_can_choose_your_tours_from}</p>
        </div>
        <div className='allReasons flexible horizontal jAround wrap'>
              {picsInWhyChooseUs()} 
        </div>
    </div>
}

export default Reasons