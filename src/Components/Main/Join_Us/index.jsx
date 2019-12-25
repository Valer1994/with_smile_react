import React, { createRef, useRef } from 'react';
// import Person from './person'
import Aux from '../../../hoc/Aux'
import './style.scss'

const JoinUs = () => {
    const myRef = useRef(null)
    console.log('myRef:', myRef)
    return(
        <Aux>
            <div>
                ehkfef
            </div>
            <div>
                ehkfef
            </div>
            {/* <div ref={(refs) => this.myRef(refs)}> */}
            <div ref={myRef}>
                ehkfef
            </div>
            <div>
                ehkfef
            </div>
        </Aux>
    )
}


export default JoinUs