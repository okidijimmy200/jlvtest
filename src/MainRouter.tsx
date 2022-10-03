import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './core/Home'
import About from './core/About'
import Contact from './core/Contact'

export default function MainRouter() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
    </>
  )
}
