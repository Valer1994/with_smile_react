import React from 'react';
import './style.scss';
import Info from './BannerInfoProps/index'
// const Info = {
//     Registed: {
//         src: RegistedIcon,
//         info: '36 967 030',
//         title: 'REGISTED USER',
//     },
//     Month: {
//         src: Monthicon,
//         info: '10 800 000',
//         title: 'WITHDRAWN EACH MONTH',
//     },
//     Active: {
//         src: ActiveIcon,
//         info: '180 00 000',
//         title: 'ACTIVE INVESTORS DAILY',
//     }
// }


const BannerInfo = () => {
    return Info.map((item, index) => (
          <div className = 'BannerInfo flexible vertical aCenter'>
              <img src = {item.src}></img>
              <span className = 'InfoTitle'>{item.text}</span>
              <span className = 'InfoText'>{item.title}</span>
          </div>

      ))
}

export default BannerInfo;