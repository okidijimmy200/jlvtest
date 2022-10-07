import React, {useState} from 'react'
import { NavLink, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { BiMenuAltRight } from 'react-icons/bi';

import  Logo from '../images/Logo.png'
export default function Nav() {
        const [hovered, setHovered] = useState(false);
        const [isOpen, setIsOpen] = useState(false)

        const onMouseEnter = (e: any) => {
                setHovered(true);
              };
            
        const onMouseLeave = (e: any) => {
                setHovered(false);
              };
        const style = hovered ? { color: "#fff", borderBottom: 'none' } : {};

        const handleClick=() => {
                setIsOpen(!isOpen)
        }
            
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
                <div className='nav-mobile'>
                        <div onClick={handleClick}><BiMenuAltRight style={{height: '30px', width: '30px', color: '#fff', cursor: 'pointer'}} /></div>
                </div>
                </div>
                {isOpen && 
                <div className='header--mobile'>
                        <ul className='nav-mobile__bar'>
                                        <li className="nav-mobile__item"><NavLink className='nav-mobile__item__link'  to='/' end>Home</NavLink></li>
                                        <li className="nav-mobile__item"><NavLink className='nav-mobile__item__link'  to='/about'>About</NavLink></li>
                                        <li className="nav-mobile__item"><HashLink smooth to='/#services'  className='nav-mobile__item__link' >Services</HashLink></li>
                                        <li className="nav-mobile__item"><NavLink className='nav-mobile__item__link'  to='/contact'>Contact Us</NavLink></li>
                                </ul>
                </div>
                }

    </>
  )
}
