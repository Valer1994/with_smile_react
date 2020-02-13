import React from 'react';
import TextAboutOurTravel from './TextAboutOurTravel/';
import OurService from './OurServices/';
import './style.scss';

const AboutOurTravel = ({ lang }) => {
    return <div className='aboutOurTravel_contain'>
            <div>
                <TextAboutOurTravel lang={lang}/>
            </div>
            <div>
                <OurService lang={lang}/>
            </div>
    </div>  
}

export default AboutOurTravel;