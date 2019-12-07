import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
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
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li className="flexible aCenter">
                            <NavLink to='/about'>
                                About
                            </NavLink>
                        </li>
                        <li className="flexible aCenter">
                            <NavLink to='/plans'>
                                Plans
                            </NavLink>
                        </li>
                        <li className="flexible aCenter">
                            <NavLink to='/blog'>
                                Blog
                            </NavLink>
                        </li>
                        <li className="flexible aCenter">
                            <NavLink to='/contact'>
                                Contact
                            </NavLink>
                        </li>
                        <li className="flexible aCenter">
                            <NavLink to='/join-us'>
                                Join Us
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}