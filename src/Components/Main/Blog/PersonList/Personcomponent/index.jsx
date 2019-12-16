import React from 'react';
import { Icon4 } from '../../pics';
import './style.scss';

const PersonComponent = () => {
    return(
        <div className ='containFromPersonComponent'>
            <div className = 'personprofile'></div>
            <p className = 'nameAndSureName'>valod papi</p>
            <p className = 'date'>21/22</p>
            <p className = 'commentPlace'>daslkfmkmfdmfkd</p>
            <img src ={ Icon4 } alt = "amount of likes" className='likesicon'/>
        </div>
    )
}
export default PersonComponent;