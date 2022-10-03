import React from 'react'
import Nav from '../../Nav'
import './Header.scss'

export default function Header() {
  return (
    <header className="header-about">
      <div className='header-about__section'>
        <Nav />
      <div className='header-about__detail'>
        <div className='header-about__detail__paragraph'>
          <div><h2>Who are we?</h2></div>
        <p className="paragraph" style={{fontWeight: 800}}>
        Nestled in the gently sloping hills of Rubaya, Kashari, Mbarara district, lies JLV Mixed farm: A
        model Farm like no other! Featuring a wide array of livestock, food crops, cash crops and all
        things natural, we are a heaven for all avid farmers. Be it someone who is willing to learn about
        farming from scratch, or someone trying to improve on the knowledge they already have. 
            </p>
            <p className="paragraph" style={{fontWeight: 800}}>
            With comprehensive records dating back to our inception in 2008, you will be able to track our
        progress in terms of improvement of animal breeds, use of scientific methods, all the way to our
        current projects of value addition.
            </p>
        </div>
        <div className='header-about__detail__picture'>
          {/* <h2></h2> */}
        </div>

      </div>
      </div>

    
</header>
  )
}
