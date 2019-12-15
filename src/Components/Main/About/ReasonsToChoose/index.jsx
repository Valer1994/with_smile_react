import React from 'react'
import '../style.scss'
import { income, support, payment, use, protect, affilate } from './pics.jsx'

const Reasons = () => {
    
    const pics = [ income, support, payment, use, protect, affilate ]
    const picsInWhyChooseUs = () => pics.map((item, ind) =>
        <div key={ind} className='picsContainers'>
            <img src={item} alt='why choose us' />
        </div>
    );

    return <div className='contain flexible vertical aCenter'>
        <div className='textContainer'>   
            <p className='preHeaderText'>Boost your money</p>
            <h2 className='headerText'>Why choose us?</h2>  
            <p className='randomText'>You can manage your investments from anywhere eihter from home or work place, at any time</p>
        </div>
        <div className='allReasons flexible horizontal jAround wrap'>
            {picsInWhyChooseUs()}       
        </div>
    </div>
}

export default Reasons