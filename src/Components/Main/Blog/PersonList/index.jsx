import React,{ useState } from 'react';
import PersonComponent from './Personcomponent/index';
import reviewers from '../personinformation'
import { selectLanguage } from '../../../../translate';
import './style.scss';

const PersonList = ({ lang }) => {
    const [ reviewType, setReviewType ] = useState('last');

    const changeReviewTypeHendler = (type) => setReviewType(type)

    const openFunc = () => reviewers && reviewers[reviewType] && reviewers[reviewType].map((item, ind) => 
        <PersonComponent 
            name={item.name} 
            surname={item.surname} 
            date={item.date} 
            comment={item.comment}
            key={reviewType + ind}
        />)

    return(
        <div className='containForPersonList'>
            <div className ='containForButtons'>
                <button className = 'lastreviewes' onClick={() => changeReviewTypeHendler('last')}>{ selectLanguage(lang).last_reviews}</button>
                <button className = 'allreviewes'  onClick={() => changeReviewTypeHendler('all')} >{ selectLanguage(lang).all_reviews}</button>
                <button className = 'topreviews'   onClick={() => changeReviewTypeHendler('top')} >{ selectLanguage(lang).top_reviews}</button>
            </div>
            <div className ='forPersonList'>
                <div className ='infAboutPersonList'>
                    <p>{ selectLanguage(lang).name_ }</p>
                    <p>{ selectLanguage(lang).date_ }</p>
                    <p>{ selectLanguage(lang).review_ }</p>
                    <p>{ selectLanguage(lang).rate_ }</p>
                </div>
                    <div>
                        { openFunc() }
                    </div>
            </div>
        </div>
    )
}
export default PersonList;