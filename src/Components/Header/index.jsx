import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { selectLanguage } from '../../translate'
import './style.scss'

export default class Header extends Component{
    render(){
        return(
            <header className='Header flexible jAround'>
                <div>
                    <img src="" alt="header"></img>
                </div>
                <nav className='flexible jBetween horizontal'>
                    <ul className="flexible jStart aCCenter ">
                        <li className="flexible aCenter">
                            <NavLink to={'/' + this.props.lang}>
                                {selectLanguage(this.props.lang).Home}
                            </NavLink>
                        </li>
                        <li className="flexible aCenter">
                            <NavLink to={'/about/' + this.props.lang}>
                                {selectLanguage(this.props.lang).About}
                            </NavLink>
                        </li>
                        <li className="flexible aCenter">
                            <NavLink to={'/plans/' + this.props.lang}>
                                {selectLanguage(this.props.lang).Plans}
                            </NavLink>
                        </li>
                        <li className="flexible aCenter">
                            <NavLink to={'/blog/' + this.props.lang}>
                                 {selectLanguage(this.props.lang).Blog}
                            </NavLink>
                        </li>
                        <li className="flexible aCenter">
                            <NavLink to={'/contact/' + this.props.lang}>
                            {selectLanguage(this.props.lang).Contact}
                            </NavLink>
                        </li>
                        <li className="flexible aCenter">
                            <NavLink to={'/join-us/' + this.props.lang}>
                            {selectLanguage(this.props.lang).JoinUs}
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}