import React, { Component } from 'react';
import './style.scss'
import { selectLanguage } from '../../../translate'

export default class About extends Component{
    state = {
        lang: 'ru'
    }

    componentDidMount(){
        this.setState({
            lang: this.props.location.pathname.split('/')[this.props.location.pathname.split('/').length - 1]
        })
    }


    render(){
        return(
            <div>
                {selectLanguage(this.state.lang).hi}
            </div>
        )
    }
}