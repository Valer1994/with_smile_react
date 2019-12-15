import React, { Component } from 'react'
import LoginIcon from './loginicon.png'
import './style.scss'

export default class Login extends Component{
    render(){
        return(
            <button className = 'Login flexible aCenter'>
                <div className = 'LoginBg'>
                    <img src = {LoginIcon}></img>
                </div>
                Login
            </button>
        )
    }
}