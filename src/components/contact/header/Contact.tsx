import React, {useState, CSSProperties, useEffect} from 'react'
import Nav from '../../Nav'
import Footer from '../footer/Footer'
import Forms from '../form/Form'
import './Contact.scss'
import {GoLocation} from 'react-icons/go'
import ClipLoader from "react-spinners/ClipLoader";
import {
  AiOutlineMail, 
  AiOutlineWhatsApp, 
  AiFillFacebook, 
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillInstagram} from 'react-icons/ai'

const override: CSSProperties = {
    display: "block",
    position: 'relative',
    margin: "0 auto",
    borderColor: "green",
    top: '150px'
  };


  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  
  /**
   * @returns {object} {width, height}
   */
  
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowDimensions;
  }

export default function Contact() {
  const [loading, setLoading] = useState(true)
  const {width} = useWindowDimensions()


  const hideSpinner = () => {
    setLoading(false)
  }
  return (
    <>
        <header className="header-about--contact">
        <div className='header-about__section--contact'>
            <Nav />
          <div className='contact'>
            <div className='contact__map'>
              <div className='contact__map--pic'>
                {loading ? (<div style={width > 1700 ? {height: '595px', width: '900px', border: 0, backgroundColor: '#f7f7f7'} : width > 1500 ? {height: '595px', width: '700px', border: 0, backgroundColor: '#f7f7f7'} : width > 1366 ? {height: '600px', width: '660px', border: 0, backgroundColor: '#f7f7f7'} : {height: '355px', width: '576px', border: 0, backgroundColor: '#f7f7f7'} }><ClipLoader loading={loading} cssOverride={override} /></div>) : null}
                
                {/* eslint-disable-next-lin */}
              <iframe onLoad={hideSpinner} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97036.39301872354!2d30.650395759030722!3d-0.40402990054766247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d8e59d48de3e3d%3A0x23701798f3d52ad!2sJLV%20MIXED%20FARM!5e0!3m2!1sen!2sug!4v1664537539996!5m2!1sen!2sug"  style={ width > 1700 ? {height: '595px', width: '900px', border: 0} : width > 1500 ? {height: '595px', width: '700px', border: 0} : width > 1366 ? {height: '600px', width: '660px', border: 0} : {height: '355px', width: '576px', border: 0} } title="myFrame"></iframe>
              </div>
              <div className='contact__map--detail'>
                <div className='heading-tetiary heading--title'>
                  <h2>Contact Us</h2>
                </div>
                <div className='locations'>
                  <ul className='locations__ul'>
                    <li><GoLocation /> Rubaga Sub-County - 18km from Biharwe</li>
                    <li> <AiOutlineMail /> hello@jlventureprises.com</li>
                    <li><AiOutlineWhatsApp /> +256 700 899 265</li>
                  </ul>
                </div>
                <div className='contact__icons'>
                  <div ><AiFillFacebook color="#225901" fontSize="2rem"/></div>
                  <div><AiFillLinkedin color="#225901" fontSize="2rem"/></div>
                  <div><AiFillTwitterCircle color="#225901" fontSize="2rem"/></div>
                  <div><AiFillInstagram color="#225901" fontSize="2rem"/></div>
                  <div><AiFillYoutube color="#225901" fontSize="2rem"/></div>    
                  
            </div>
              </div>
            
    </div>
    <div className='contact__form'>
      <Forms />
      <div className='contact__footer'>
        <div className='contact__footer__box'>
          <div className='contact__footer__box--text'>For Booking</div>
        </div>
        <div className='contact__footer__btn'>
        <div className='contact__footer__box--text'>Click Here</div>
        </div>
      </div>

    </div>
            </div>
        </div>
    </header>
    <Footer />
    </>
  )
}
