import React, { Component } from 'react'
import Button from './Button/'
import './style.scss'

export default class HeaderMenu extends Component{
    render(){
        return(
            <div className = 'Header flexible aCenter jAround'>
                <div className = 'LogoTitle flexible aCenter'>
                    <div className = 'Logo'></div>
                    <h1 className = 'Title'>With Smile</h1>
                </div>

                <ul className = 'Menu flexible aCenter'>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>AFFILIATES</li>
                    <li>PLANS</li>
                    <li>BLOG</li>
                    <li>CONTACT</li>
                    <Button />
                </ul>           
            </div>

        )
    }
}