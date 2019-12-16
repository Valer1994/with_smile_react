import React from 'react';
import PersonComponent from './Personcomponent/index'
import { selectLanguage } from '../../../../translate';
import './style.scss';

const PersonList = ({ lang }) => {
    return(
        <div className ='containForPersonList'>
            <div className ='infAboutPersonList'>
                <p>{ selectLanguage(lang).name_ }</p>
                <p>{ selectLanguage(lang).date_ }</p>
                <p>{ selectLanguage(lang).review_ }</p>
                <p>{ selectLanguage(lang).rate_ }</p>
            </div>
            <PersonComponent />
            <PersonComponent /> 
            <PersonComponent /> 
        </div>
    )
}
export default PersonList;