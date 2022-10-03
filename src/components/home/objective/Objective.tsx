import React, {useState,useRef} from 'react'
import {MdAccessTimeFilled} from 'react-icons/md'
import emailjs from '@emailjs/browser';

import './Objective.scss'

const Farm1 = require('../../../images/Card-2.png')
const Cottage = require('../../../images/Card-1.png')

export default function Objective() {
  const [modal, setModal] = useState(false);
  const [modalS, setModalS] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);
    const [values, setValues] = useState({
      name: '',
      email: '',
      number: ''
    })
    const [state, setState] = useState({
      radio: ''
    })

    const handleChange = (name: any) => (event: any) => {
      setValues({ ...values, [name]: event.target.value })
    }
    const {radio} = state

    const onChange = (event: any) => {
      event.persist()
      const {id, name, value, type} = event.target
  
      if (type === 'radio') {
        setState(prev => ({...prev, radio: id}))
        console.log(id)
      } else {
        setState(prev => ({...prev, [name]: value}))
      }
    }

    const sendEmail = (e: any) => {
      e.preventDefault();
  
    if (!form.current){
        return;
    }
      emailjs.sendForm(
        'service_qcw5fym', 
        'template_ujolm7q', 
        form.current, 'WClV94PwpJ-GrFraq')
        .then((result) => {
            console.log(result.text);
            setValues({ ...values, name: '', email: '',  number: ''})
            setState({...state, radio:''})
        }, (error: any) => {
            console.log(error.text);
        });
    };

  const toggleModal = () => {
    setModal(!modal);
  };
  const toggleModalS = () => {
    setModalS(!modalS);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  if(modalS) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div>
      <section className='section-objective' >
      <div className='row'>
        <div className="col-1-of-3 ">
          <div className='objective__spacing'>
          <h3 className="heading-tetiary u-margin-bottom-small">An African Luxury Nature Experience With A Difference And Innovation</h3>
                <p className="paragraph">
                Understand the history and environment of Mbarara the land of milk and honey in the pearl of
Africa. Mbarara is a home to the most graceful cultures in Uganda famously now for raring their
long-horned bread of cattle. located on one of the gentle slopes of the Mbarara ranges and a sister
to JLV mixed farm, Kashari Farm Resort offers an African filled jaw dropping mixed farm
experience.
                  </p>
      <h2><strong>By Rutosha JP</strong></h2>
      <p>(Farmer)</p>
          </div>
                       
        </div>
        <div className="col-1-of-3 ">
        <div className='objective__root'>
            <div className='objective__root__img'>
              <img src={Cottage} alt='cottage' className='objective__root__pic'/>
            </div>
            <div className='objective__root__textarea'>
              <div className='objective__root__title'>
                <h4 className='objective__root__heading'>Kashari Farm Resort 5 Star Cottages Experience</h4>
                <MdAccessTimeFilled style={{color: 'green', height: '10px', width: '10px'}} /><span className='objective__root__date'>6 July 2022</span>
              </div>
              <div className='objective__root__paragrapgh'>
                <p>The magnificent cottages at Kashari Farm Resort feature spacious master bedroom with an
                  <span onClick={toggleModal} className="btn-modal">...</span>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h4>Kashari Farm Resort 5 Star Cottages Experience</h4>
            <p>
            The magnificent cottages at Kashari Farm Resort feature spacious master bedroom with an
            ensuite bathroom and dressing area, an extensive drawing room with a plasma TV, an audio
            centre and an integrated workspace, a private dining room and a kitchen, a bar, an entrance lobby
            and a guest washroom.
            <div>Book Now</div>
            <form className='form' ref={form} onSubmit={sendEmail}>
                  <div className='form__group'>
                    <label htmlFor="name" className="form__label">Name</label>
                    <input type="text" 
                    className="form__input" 
                    placeholder="name" 
                    id="name" required
                    name='to_name'
                    value={values.name} onChange={handleChange('name')} />
                  </div>
                  <div className='form__group'>
                    <label htmlFor="email" className="form__label">Email</label>
                    <input type="email" 
                    className="form__input" 
                    placeholder="email" 
                    id="email" required
                    value={values.email} 
                    name='from_name'
                    onChange={handleChange('email')} />
                  </div>
                  <div className='form__group'>
                  <div className="form__radio-group">
                        <input 
                        type="radio" 
                        className="form__radio-input" 
                        id="small" 
                        value="single"
                        name="radio"
                        checked={radio === 'small'} 
                        onChange={onChange}  />
                        <label htmlFor="small" className="form__radio-label">
                            <span className="form__radio-button"></span>
                            Single
                        </label>
                    </div>
                  <div className="form__radio-group">
                        <input type="radio" 
                        className="form__radio-input" 
                        id="medium" 
                        name="radio" 
                        value="duplex"
                        checked={radio === 'medium'} 
                        onChange={onChange}/>
                        <label htmlFor="medium" className="form__radio-label">
                            <span className="form__radio-button"></span>
                            Duplex
                        </label>
                    </div>
                  <div className="form__radio-group">
                        <input type="radio" 
                        className="form__radio-input" id="large" 
                        name="radio" 
                        value="cottage"
                        checked={radio === 'large'} 
                        onChange={onChange}/>
                        <label htmlFor="large" className="form__radio-label">
                            <span className="form__radio-button"></span>
                            Cottage
                        </label>
                    </div>

                  </div>
                  <div className='form__group'>
                    <label htmlFor="number" className="form__label">Number of guests</label>
                    <input type="number" 
                    name='number'
                    className="form__input form__input__number" 
                    placeholder="number of guests" id="number" required
                    value={values.number} onChange={handleChange('number')} />
                  </div>
                  <div className="form__group">
                              <button className="btn btn--green" onSubmit={sendEmail}>Submit</button>
                            </div>
                </form>
            </p>
            <button className="close-modal" onClick={toggleModal}>
            &#10008;
            </button>
          </div>
        </div>
      )}
                  <div >
                  </div>
                </p>
              </div>
            </div>
          </div>
                       
        </div>
        <div className="col-1-of-3 ">
        <div className='objective__root'>
            <div className='objective__root__img'>
              <img src={Farm1} alt='cottage' className='objective__root__pic'/>
            </div>
            <div className='objective__root__textarea'>
              <div className='objective__root__title'>
                <h4 className='objective__root__heading'>JLV Mixed Farm modern farming experience</h4>
                <MdAccessTimeFilled style={{color: 'green', height: '10px', width: '10px'}} /><span className='objective__root__date'>6 July 2022</span>
              </div>
              <div className='objective__root__paragrapgh'>
                <p>Known as one of the largest modern farming gazetted fplaces in the Uganda, the JLV Mixed Farm
                <span onClick={toggleModalS} className="btn-modal">...</span>
      {modalS && (
        <div className="modal">
          <div onClick={toggleModalS} className="overlay"></div>
          <div className="modal-content">
            <h4>Modern Farming Experience.</h4>
            <p>
            Known as one of the largest modern farming gazetted fplaces in the Uganda, the JLV Mixed
            Farm sits 1900 acres of land sharing with Kashari Farm Resort, just a 2 minute walk from the
            hotel. With over over 10,000 heads of cattle, 2,000 heads of goats and sheep, rabbits, poultry,
            fields of maize and matooke, it is a extraordinary display of the integration of modern farming in
            our locality. Visitors can partake in farm activities like a farm walks, bird watching, cycling,
            running and picnicking. The daily hours are from 6:00 am until 07:30 pm.
            
            </p>
            <button className="close-modal" onClick={toggleModalS}>
            &#10008;
            </button>
          </div>
        </div>
      )}
                </p>
              </div>
            </div>
          </div>

        </div>
                       
        </div>

    </section>
    </div>
    
  )
}
