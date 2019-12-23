import React, { Component } from 'react';
import { connect } from 'react-redux'

import {
    changeName,
    changeSurName
} from '../../../Actions/'

import './style.scss'

const mapStateToProps = ({ counter }) => ({ 
    name: counter.name, 
    surname: counter.surname 
})

class JoinUs extends Component{
    state = {
        name: 'Poxos',
        surname: 'Poxosyan'
    }

    nameHandler(name){
        console.log('namename:', name)
        this.props.changeName(name)
        console.log('this.props.:', this.props)
    }

    render(){
        return(
            <div>
                <span>my name is: {this.props.name}</span>
                <br/>
                <span>my surname is: {this.props.surname}</span>
                <br/>
                <button 
                    onClick={() => this.nameHandler(4)}>
                        Change name and surname
                </button>
            </div>
        )
    }
}


export default connect(mapStateToProps, 
    { changeName, changeSurName})(JoinUs)