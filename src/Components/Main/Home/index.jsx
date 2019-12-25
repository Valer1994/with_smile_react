import React, { Component } from 'react';
import BannerInfo from './Banner/BannerInfo/display';
import Banner from './Banner/';
 
import './style.scss';

const Home = ({lang}) => {
    return <div className='Home flexible vertical aCenter'> 
            <Banner />  
            <BannerInfo /> 
        </div>
}

export default Home;
// import React, { useState, useEffect } from 'react';
// import './style.scss'

// const Home = () => {
//     const [name, setName] = useState('Valo')
//     const [isOpen, setIsOpen] = useState(false)
//     const changeName = () => setName('Valodik')
//     const changeIsOpen = () => setIsOpen(!isOpen)

//     useEffect(() => {
//         console.log('Home components is useEffect componentDidMount!!')
//     }, []) //componentDidMount

//     useEffect(() => {
//         console.log('Home components is useEffect depends on name5!!')
//     }, [name]) //componentDidUpdate

//     useEffect(() => {
//         console.log('Home components is useEffect unmount!!')
//         return () => {
//             console.log('Home components is useEffect unmount!!')
//         }
//     }, []) //componentDidUpdate

//     // useEffect(() => {
//     //     console.log('Home components is useEffect!!')
//     // }) //


//     return(
//         <div>
//             <div>
//                 {name}
//             </div>
//             <button onClick={changeName}>Change Name</button>
//             <button onClick={changeIsOpen}>Open</button>
//             {isOpen 
//                 ? <div></div> 
//                 : <div></div>
//             }
//         </div>
//     )
// }

// export default React.memo(Home)
