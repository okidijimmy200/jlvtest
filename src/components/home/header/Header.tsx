import React from 'react'
import Nav from '../../Nav'
import './Header.scss'


export default function Header() {
  return (
    <>
            <header className="header">
                <Nav />
            <div className="header__text-box">
                    <h1 className="heading-primary">
                            <span className="heading-primary--main">JLV Mixed Farm</span>
                            <span className="heading-primary--sub">Center For Agri Excellence</span>
                    </h1>

            </div>
            
        </header>
    </>
  )
}
