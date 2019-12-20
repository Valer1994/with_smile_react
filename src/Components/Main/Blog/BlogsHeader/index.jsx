import React from 'react';
import { selectLanguage } from '../../../../translate';
import './style.scss';



const BlogsHeader = ({ lang }) => {
    return(
        <div className='blogs_header'>
            <h3>{selectLanguage(lang).what_you_will_get_as_a_result_of_relaxing_with_us}</h3>
            <h1>{selectLanguage(lang).latest_review}</h1>
            <p>{selectLanguage(lang).our_goal_is_to_see_your_rating_of_our_hard_work}</p>
        </div>
    )
}

export default BlogsHeader; 