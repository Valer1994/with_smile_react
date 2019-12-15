import React, { Component } from 'react'
import LanguageIcon from './language.png'
import DownIcon from './downicon.png'
import './style.scss'

export default class Languange extends Component{
    render(){
        return(
            <div className = 'language flexible'>
                <div className = 'LanguangeIcon'>
                        <img src = {LanguageIcon}></img>
                </div>
                
                
                <div className = 'DropDown'>
                    <div className = 'DropDownMain'>
                        <span className = 'Main'><img src = {DownIcon}></img>
                        </span>
                    </div>
                </div>
                <div className = 'DropDownList flexible vertical'>
                    <span className = 'Choice' id = 'ARM'>ARM</span>
                    <span className = 'Choice' id = 'RUS'>RUS</span>
                    <span className = 'Choice' id = 'ENG'>ENG</span>
                </div>
            </div>
        )
    }
}