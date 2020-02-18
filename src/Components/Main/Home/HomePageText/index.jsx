import React from 'react';
import classnames from 'classnames';
import Paper from '../../../Atoms/Paper';
import { NavLink } from 'react-router-dom';
import Button from '../../../Atoms/Button';
import { selectLanguage } from '../../../../translate';

import './style.scss';

const HomePageText = ({
    lang,
    className,
}) => (
    <Paper className={classnames('HomePageText',{[className]: className})}>
        <h2 className='travel_to'>{selectLanguage(lang).travel_to_armenia}</h2>
        <h1 className='choose_your'>{selectLanguage(lang).choose_your_tour}</h1>
        <h3 className='text'>{selectLanguage(lang).get_the_most_comfortable_and_affordable_tours_with_us}</h3>
        <Paper className='button_class'>
            <NavLink to={ '/' + lang + '/tours' }>
                <Button className='homes_page_button'>
                    {selectLanguage(lang).choose_tour}
                </Button>
            </NavLink>
        </Paper>
        <Paper>
            
        </Paper>
    </Paper>

);

export default HomePageText;