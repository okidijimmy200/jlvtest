import React from 'react'

import './Enterprise.scss'

import Img1 from '../../../images/about-img-1.png'
import Img2 from '../../../images/about-img-2.png'
import Img3 from '../../../images/about-img-3.png'

export default function Enterprise() {
  return (
    <div className='section-enterprise'>
      <div className='enterprise--heading'>
        <h2>Our Enterprises</h2>
      </div>
      <div>
        <div className='row row_1'>
          <div className='col-1-of-3'>
            <div className='enterprise'>
              <div className='enterprise__pic'>
                <img src={Img1} alt='img-1' className='enterprise__img'/>
              </div>
              <div className='enterprise__textarea'>
                <h3 className='enterprise__title'>JLV Mixed Farm</h3>
                <h4 className='enterprise__detail'>Uganda</h4>
              </div>

            </div>
          </div>
          <div className='col-1-of-3'>
          <div className='enterprise'>
              <div className='enterprise__pic'>
                <img src={Img2} alt='img-2' className='enterprise__img'/>
              </div>
              <div className='enterprise__textarea'>
                <h3 className='enterprise__title'>JLV Diary</h3>
                <h4 className='enterprise__detail'>Uganda, Kenya, Tanzania</h4>
              </div>

            </div>
          </div>
          <div className='col-1-of-3'>
          <div className='enterprise'>
              <div className='enterprise__pic'>
                <img src={Img3} alt='img-3' className='enterprise__img'/>
              </div>
              <div className='enterprise__textarea'>
                <h3 className='enterprise__title'>Kashari Farm Resort</h3>
                <h4 className='enterprise__detail'>Uganda</h4>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
