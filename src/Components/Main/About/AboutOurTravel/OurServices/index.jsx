import React from 'react';
import { selectLanguage } from '../../../../../translate'
import { serviceInfrom } from '../../../../../config/config'
import './styles.scss';

const OurService = ({ lang }) => {
    const service = () => serviceInfrom.map((item,ind) => (
           <div key={ind}>
                <a><img src={item.icon} alt='Icon From Our Service' width='60px' height='60px'/></a>
                <p>{selectLanguage(lang)[item.text]}</p>
            </div>));

    return <div className = 'ourService'>
              { service() }
        </div>  
}

export default OurService;