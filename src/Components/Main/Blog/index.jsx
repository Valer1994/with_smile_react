import React from 'react';
import BlogsHeader from './BlogsHeader/index';
import PersonLists from './PersonList/index'
import './style.scss';


const Blog = ({ lang }) => {
    return(
        <div  className='contain_blog'>
            <BlogsHeader lang={lang}/>
            <PersonLists lang={lang}/>
        </div>
    )
}



export default Blog;