import React, { Component } from 'react';

import SupportIcon from './supporticon.png'
import MailIcon from './mailicon.png'

import './style.scss'

export default class Connection extends Component{
    render(){
        return(
            <div className = 'flexible'>
                <div className = 'Support flexible aCenter'>
                    <img src = {SupportIcon} alt = 'support' className = 'MiniIcon'></img>
                    <p>support</p>
                </div>
                <div className = 'Mail flexible aCenter'>
                    <img src = {MailIcon} alt = 'mail' className = 'MiniIcon'></img>
                    <p>WithSmale@gmail.com</p>
                </div>
            </div>
        )
    }
}