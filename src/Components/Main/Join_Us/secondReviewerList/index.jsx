import React,{ useState } from 'react';
import allRewevers from '../reviewerInformation';
import SliderComponent from './SliderComponent/index'
import './style.scss';


const Reviewers = ({ lang }) => {
    const [reviwerType,setReviwerType] = useState(0);

    const chengeReviewerToUp  = () => {
        if(reviwerType + 1 != allRewevers.length){
            setReviwerType(reviwerType + 1) 
        }
    }

    const chengeReviewerToDown  = () => {
        if(reviwerType - 1 >! allRewevers[0]){
            setReviwerType(reviwerType - 1) 
        }
        else {
            setReviwerType(0)
        }
    }

    const reviewerFunc= () => {
        return <div className='case_about_reviewer_inform'>
                <p className='review'>" {allRewevers[reviwerType].comment} "</p>    
                <div className='reviewerProfile'>
                    <SliderComponent toDown={chengeReviewerToDown} toUp={chengeReviewerToUp} state={reviwerType}/>
                </div>
                <p className='name_surname'>{allRewevers[reviwerType].name} {allRewevers[reviwerType].surname}</p>
                <p>{allRewevers[reviwerType].date}</p>
            </div>
    }
    return <div className='second_reviewer'>
        <div className='reviewers_inform'>{reviewerFunc()}</div>
    </div>
}
export default Reviewers;

