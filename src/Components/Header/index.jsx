import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { selectLanguage } from '../../translate';
import { Smile } from '../../images';
import ControlledOpenSelect from './languages';

import './style.scss';

const Header = ({lang}) => {
    return <header className='Header flexible jAround'>
            <div className='logo'>
                <NavLink to={'/' + lang + '/'}>
                    <img src={Smile} alt="header" className='logo'/>
                </NavLink>
            </div>
            <nav className='flexible jBetween horizontal'>
                <ul className="flexible jStart aCCenter ">
                    <li className="flexible aCenter">
                        <NavLink to={'/' + lang + '/'}>
                            {selectLanguage(lang).Home}
                        </NavLink>
                    </li>
                    <li className="flexible aCenter">
                        <NavLink to={'/' + lang + '/about' }>
                            {selectLanguage(lang).About}
                        </NavLink>
                    </li>
                    <li className="flexible aCenter">
                        <NavLink to={'/' + lang + '/tours'}>
                            {selectLanguage(lang).Tours}
                        </NavLink>
                    </li>
                    <li className="flexible aCenter">
                        <NavLink to={'/' + lang + '/blog'}>
                                {selectLanguage(lang).Blog}
                        </NavLink>
                    </li>
                    <li className="flexible aCenter">
                        <NavLink to={'/' + lang + '/contact'}>
                        {selectLanguage(lang).Contact}
                        </NavLink>
                    </li>
                    <li className="flexible aCenter">
                        <NavLink to={'/' + lang + '/join-us'}>
                        {selectLanguage(lang).JoinUs}
                        </NavLink>
                    </li>
                </ul>
                <ControlledOpenSelect lang={lang}/>
            </nav>
        </header>
    }


export default withRouter(Header);
