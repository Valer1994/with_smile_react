import React,{useState} from 'react';
import allRewevers from '../../reviewerInformation';
import { arrow } from '../../../../../images/index';
import './style.scss';


const SliderComponent = (props) => {
    return <div className='contain_of_slider'>
        <div onClick = {props.toDown} className='arrow_left_div'>
            <img src={arrow} alt="arrow_left" className='left_arrow'/>
        </div>
        <div className='reviewer_image_case'>
            <img src={allRewevers[props.state].pic} alt="reviwer_image" className='reviewer_image'/>
        </div>
        <div onClick={props.toUp} className='arrow_right_div'>
            <img src={arrow} alt="Arrrow_right" className='right_arrow'/>
        </div>
    </div>
}

export default SliderComponent; 