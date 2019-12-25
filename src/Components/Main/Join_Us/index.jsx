import React, { Component, createRef, useRef } from 'react';
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


// import { connect } from 'react-redux'

// import {
//     changeName,
//     changeSurName
// } from '../../../Actions/'

// const mapStateToProps = ({ counter }) => ({ 
//     name: counter.name, 
//     surname: counter.surname 
// })

// class JoinUs extends Component{
//     state = {
//         name: 'Poxos',
//         surname: 'Poxosyan'
//     }

//     nameHandler(name){
//         console.log('namename:', name)
//         this.props.changeName(name)
//         console.log('this.props.:', this.props)
//     }

//     render(){
//         return(
//             <div>
//                 <span>my name is: {this.props.name}</span>
//                 <br/>
//                 <span>my surname is: {this.props.surname}</span>
//                 <br/>
//                 <button 
//                     onClick={() => this.nameHandler(4)}>
//                         Change name and surname
//                 </button>
//             </div>
//         )
//     }
// }


// export default connect(mapStateToProps, 
//     { changeName, changeSurName})(JoinUs)
