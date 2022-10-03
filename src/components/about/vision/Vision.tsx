import React from 'react'
import Enterprise from '../enterprises/Enterprise'
import './Vision.scss'

const MissionPic = require('../../../images/Mission.png')
const VisonPic = require('../../../images/Vision.png')

export default function Vision() {
  return (
    <section className='section-vision'>
        <div className='vision'>
        <div className='row'>
            <div className='col-1-of-2'>
                <div className='vision__statement'>
                  <div className='vision__box'>
                    <div className='vision__box-1'>
                      <div className='vision__content'>
                      <div className='vision__box-1-heading'>
                      <img src={MissionPic} alt='vision__pic' className='vision__pic'/>
                      <h2>Our Mission</h2>
                    </div>
                    <div className='vision__text'>
                    To promote sustainable agricultural practices, strengthen markets
                        and protect the environment in rural areas
                    </div>
                      </div>

                    </div>
                  </div>
                  <div>
                  <div>
                  <div className='vision__box'>
                    <div className='vision__box-1'>
                    <div className='vision__content'>
                    <div className='vision__box-1-heading'>
                      <img src={VisonPic} alt='vision__pic' className='vision__pic'/>
                      <h2>Our Vision</h2>
                    </div>
                    <div  className='vision__text'>
                    To promote sustainable agricultural practices, strengthen markets
                        and protect the environment in rural areas
                    </div>
                    </div>

                    </div>
                  </div>
                  </div>
                  </div>
                </div>
            </div>
            <div className='col-1-of-2'>
                <div className='vision__picture'>
                </div>
                <div className='vision__picture--2'></div>
            </div>

        </div>
        </div>
        <Enterprise />

    </section>
  )
}
