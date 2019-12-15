import React, { Component } from 'react'
import TopBar from './HeaderComponents/TopBar/'
import HeaderMenu from './HeaderComponents/HeaderMenu/'
import Banner from './HeaderComponents/Banner/'
import FinanceBanner from './HeaderComponents/Finance/'
// import { NavLink } from 'react-router-dom'
import './style.scss'

export default class Header extends Component{
    render(){
        return(
            <div className = 'HeaderMain'>
                <TopBar />
                <HeaderMenu />
                <Banner />
                <FinanceBanner />
            </div>
        )
    }
}