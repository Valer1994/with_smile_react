import React from 'react';
import { selectLanguage } from '../../../../../translate';

import './style.scss';

const TextAboutOurTravel = ({ lang }) => {

    return <div className='textAboutOurTravel'>
        <h3>{selectLanguage(lang).who_we_are}</h3>
        <h1>{selectLanguage(lang).about_our_company}</h1>
        <h2>{selectLanguage(lang).comparing_with_tadays_tour_companies_we_have_created_unique_and_officient}</h2>
        <p>{selectLanguage(lang).applying_to_our_tour_company_you_get_rid_of_any_risks_because_we_aim_to_make_your_rest}</p>
    </div>  

}

export default TextAboutOurTravel;