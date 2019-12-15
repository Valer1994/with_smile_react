import React, { Component } from 'react';
import Connection from './TopBarComponents/Connection/'
import Language from './TopBarComponents/Language/'
import Login from './TopBarComponents/Login/'
import './style.scss'

export default class TopBar extends Component{
    render(){
        return(
            <div className = 'TopBar flexible'>
                <Connection />
                <Language />
                <Login />
            </div>
        )
    }
}