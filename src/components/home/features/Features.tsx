import React from 'react'
import './Features.scss'
import { Link } from 'react-router-dom'

import Cow from '../../../images/icon-1.png'
import Diary from '../../../images/icon-2.jpg'
import Resort from '../../../images/icon-3.png'

interface ChildProps  {
    onclick?: () => void;
    diaryHandler?: () => void;
    resortHandler?: () => void;
}

export default function Features({onclick, diaryHandler, resortHandler}: ChildProps) {
  return (
    <>

    <section className="section-about">
                <div className="row">
                    <div className='feature-box__position'>
                    <div className="col-1-of-3 ">
                        <div className="feature-box" onClick={onclick}>
                            <img src={Cow} alt='cow' className='feature-box__icon'/>
                            <h3 className="heading-tetiary">JLV Mixed Farm</h3>
                            <p className="feature-box__text u-margin-bottom-small">
                                Center for Agri Excellence 
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-3 ">
                        <div className="feature-box" onClick={diaryHandler}>
                            <img src={Diary} alt='cow' className='feature-box__icon icon-basic-world' />
                            <h3 className="heading-tetiary">JLV Diary</h3>
                            <p className="feature-box__text u-margin-bottom-small">
                                Eat Healthy, Be 
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-3 ">
                        <div className="feature-box" onClick={resortHandler}>
                        <img src={Resort} alt='cow' className='feature-box__icon'/>
                            <h3 className="heading-tetiary">Kashari Farm Resort</h3>
                            <p className="feature-box__text u-margin-bottom-small">
                                5 Star Experience
                            </p>
                        </div>
                    </div>

                    </div>
                    </div>
                    

            </section>
            <section className='section-wrapper'>
                <div className='row'>
                <div className="wraper">
  <h1 className='heading-secondary heading-title'>Why Choose Us?</h1>

<div className='text'>
    <div className='text__box'><div className='text__paragraph1'>Modern Farming Experience</div></div>
    <div className='text__box'><div>Highland Nature Experience</div></div>
    <div className='text__box'><div className='text__paragraph2'>Causey Luxury Experience</div></div>
</div>
  <ul className="container">

    <Link className="link link__1" to=''></Link>
    <Link className="link active link__2" to=''></Link>
    <Link className="link link__3" to=''></Link>
  </ul>

 
</div>
                </div>
            </section>
    </>
  )
}
