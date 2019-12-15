import React, { Component } from 'react'
import ActiveIcon from './activeicon.png'
import WithdrawnIcon from './withdrawnicon.png'
import RegistedIcon from './registedicon.png'
import './style.scss'

export default class FinanceBanner extends Component{
    render(){
        return(
            <div className = 'Finance flexible jAround'>
                <div className = 'Registed flexible aCenter vertical'>
                    <img src = {ActiveIcon}></img>
                    <span className = 'FinanceValue'>36 967 030</span>
                    <span className = 'FinanceInfo'>REGISTERED USERS</span>
                </div>
                <div className = 'Withdrawn flexible aCenter vertical'>
                    <img src = {WithdrawnIcon}></img>
                    <span className = 'FinanceValue'>$ 10 800 000</span>
                    <span className = 'FinanceInfo'>WITHDRAWN EACH MONTH</span>
                </div>
                <div className = 'Active flexible aCenter vertical'>
                    <img src = {RegistedIcon}></img>
                    <span className = 'FinanceValue'>180 000 00</span>
                    <span className = 'FinanceInfo'>ACTIVE INVESTORS DAILY</span>
                </div>
            </div>
        )
    }
}