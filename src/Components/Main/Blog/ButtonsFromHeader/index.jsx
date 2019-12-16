import React from 'react';
import { selectLanguage } from '../../../../translate';
import './style.scss';


const ButtonsFromHeader = ({ lang }) => {
    return(
        <div className ='containForButtons'>
            <button className = 'lastreviewes'>{ selectLanguage(lang).last_reviews}</button>
            <button className = 'allreviewes'>{ selectLanguage(lang).all_reviews}</button>
            <button className = 'topreviews'>{ selectLanguage(lang).top_reviews}</button>
        </div>
    )
}

export default ButtonsFromHeader;