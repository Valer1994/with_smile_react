import React from 'react';
import Paper from '../../../Atoms/Paper';

import './style.scss';

const Banner = ({
    lang,
    data,
}) => (
    <Paper>
        <h1>{data}</h1>
        <p></p>
    </Paper>
);

export default Banner;