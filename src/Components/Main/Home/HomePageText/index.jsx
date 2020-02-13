import React from 'react';
import Paper from '../../../Atoms/Paper';
import Button from '../../../Atoms/Button';
import { selectLanguage } from '../../../../translate';
import classnames from 'classnames';

import './style.scss'

const HomePageText = ({
    lang,
    className,
}) => (
    <Paper className={classnames('HomePageText',{[className]: className})}>
        <h2>{selectLanguage(lang).travel_to_armenia}</h2>
        <h1>{selectLanguage(lang).choose_your_tour}</h1>
        <h3>{selectLanguage(lang).get_the_most_comfortable_and_affordable_tours_with_us}</h3>
        <Paper>
            <Button children={selectLanguage(lang).choose_tour}/>
        </Paper>
        <Paper>

        </Paper>
    </Paper>

);

export default HomePageText;