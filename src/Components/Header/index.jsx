import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import { selectLanguage } from '../../translate'
import ControlledOpenSelect from './languages'
import './style.scss'

class Header extends Component{
    render(){
        console.log('this.props:', this.props)
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
                    <ControlledOpenSelect lang={this.props.lang}/>
                </nav>
            </header>
        )
    }
}

export default withRouter(Header);
