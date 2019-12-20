import React from 'react';
import { Icon4 } from '../../pics';
import './style.scss';

const PersonComponent = ({ name, surname, date, comment }) => {
    return(
        <div className ='containFromPersonComponent'>
            <div className = 'personprofile'></div>
            <div className = 'nameAndSureName'>{name} {surname}</div>
            <div className = 'date'> {date} </div>
            <div className = 'commentPlace'>{comment}</div>
            <img src ={ Icon4 } alt = "amount of likes" className='likesicon'/>
        </div>
        )  
    }
    
export default PersonComponent;
