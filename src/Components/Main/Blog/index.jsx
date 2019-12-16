import React from 'react';
import BlogsHeader from './BlogsHeader/index';
import ButtonsFromHeader from './ButtonsFromHeader/index';
import PersonList from './PersonList/index'
import './style.scss';


const Blog = ({ lang }) => {
    return(
        <div  className='contain_blog'>
            <BlogsHeader lang={lang}/>
            <ButtonsFromHeader lang={lang}/>
            <PersonList lang={lang}/>
        </div>
    )
}



export default Blog;