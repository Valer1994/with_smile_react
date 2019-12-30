import React from 'react'
import { render } from '@testing-library/react';

export default class Person extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.name}</h3>
                {this.props.children}
            </div>
        )
    }
}