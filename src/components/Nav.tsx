import React, {useState} from 'react'
import { NavLink, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import  Logo from '../images/Logo.png'
export default function Nav() {
        const [hovered, setHovered] = useState(false);

        const onMouseEnter = (e: any) => {
                setHovered(true);
              };
            
        const onMouseLeave = (e: any) => {
                setHovered(false);
              };
        const style = hovered ? { color: "#fff", borderBottom: 'none' } : {};
            
  return (
    <>
                    <div className='nav'>
                        <div className="header__logo-box">
                <div className='header__logo'><Link to='/' style={{display: 'flex', textDecoration: 'none'}}>
                        <div className='header__logo__icon'><img src={Logo} alt='logo' className='header__logo__icon--size'/></div>
                        <div className='header__logo__text'>JLV Mixed Farm</div>
                </Link>

                </div>
                        
                </div>
                <div className='nav__bar'>
                <ul className='nav__bar__list'>
                        <li className="nav__bar__item"><NavLink className={(navData) => (navData.isActive ? 'nav__bar__active-nav' : 'nav__bar__link')} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} to='/' end>Home</NavLink></li>
                        <li className="nav__bar__item"><NavLink className={(navData) => (navData.isActive ? 'nav__bar__active-nav' : 'nav__bar__link')} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} to='/about'>About</NavLink></li>
                        <li className="nav__bar__item"><HashLink smooth to='/#services'  className='nav__bar__hash' style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Services</HashLink></li>
                        <li className="nav__bar__item"><NavLink className={(navData) => (navData.isActive ? 'nav__bar__active-nav' : 'nav__bar__link')} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} to='/contact'>Contact Us</NavLink></li>
                </ul>

                </div>
                </div>
    </>
  )
}
