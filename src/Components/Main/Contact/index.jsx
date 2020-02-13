import React from 'react';
import { selectLanguage } from '../../../translate';
import { contactIcon, contactBgImage } from '../../../../src/images/index';
import BasicTextFields from './input/index';

import './style.scss'

const Contact = ({lang}) => {

    return <div className='contain contactUs'>
        <img src={contactBgImage} alt='background' className='contactBgImg' />
        <div className='contactUsWrapper flexible horizontal jBetween'>
            <div className='messageBoxContainer flexible vertical jStart'>
                <div className='textContainer flexible vertical aStart'>   
                    <p className='preHeaderText'>{selectLanguage(lang).contact_us}</p>
                    <h2 className='headerText'>{selectLanguage(lang).get_in_touch}</h2>  
                    <p className='randomText'>{selectLanguage(lang).please_feel_free_to_contact_us_through_our_support_center}</p>
                </div>
                <div className='messageBox'>
                    <p>{selectLanguage(lang).send_us_a_message}</p>
                    <BasicTextFields />
                </div>
            </div>
            <div className='contactUsImgContainer'>
                <img src={contactIcon} alt='contact us' className='contactIcon' />
            </div>
        </div>
    </div>
}

export default Contact