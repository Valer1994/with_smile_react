import React, { Component } from 'react'
import './style.scss'
import Button from '../HeaderMenu/Button/'

export default class Banner extends Component{
    render(){
        return(
            <div className = 'BannerInfo flexible vertical'>
                <span className = 'BannerMiniTitle'>TRAVEL HYIP</span>
                <span className = 'BannerBigTitle'>INVESTMENT</span>
                <span className = 'BannerText'>
                    A Profitable Platform For High-Margin
                    Travel invastment
                </span>
                <Button />
            </div>
        )
    }
}