import React, {useState} from 'react'
import {TbBeach} from 'react-icons/tb'
import {MdNaturePeople, MdModelTraining} from 'react-icons/md'
import {GiCow, GiGrass} from 'react-icons/gi'

import './Action.scss'

export default function Action() {
  const [modal, setModal] = useState(false);
  const [resort, setResort] =useState(false)
  const [cattle, setCattle] = useState(false)
  const [hay, setHay] = useState(false)
  const [intern, setIntern] = useState(false)

  const toggleModal = () => {
    setModal(!modal);
  };
  const toggleResort = () => {
    setResort(!resort);
  };
  const toggleCattle = () => {
    setCattle(!cattle);
  };
  const toggleHay = () => {
    setHay(!hay);
  };
  const toggleIntern = () => {
    setIntern(!intern);
  };

  if(modal || resort || cattle || hay || intern) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <div className='section-action' id='services'>
              <div className="grid-container-action">
              <div className="grid-item-action box-1">
              <div className='grid-item-action__1'>
                <h2>Unmatched Services. Unmatched Excellence</h2>
              </div>
              </div>
              <div className="grid-item-action">
                <div className='grid-item-action__icon'>
                  <TbBeach fontSize='5rem'/></div>
                  <div className='grid-item-action__heading heading-tetiary u-margin-bottom-small'>
                    <h2>5 Star Resort</h2>
                  </div>
                  <div className='grid-item-action__box'>
                    <div className='grid-item-action__para'>The magnificent cottages at Kashari Farm Resort
                    <span onClick={toggleResort} className="btn-modal">...</span>
      {resort && (
        <div className="modal">
          <div onClick={toggleResort} className="overlay"></div>
          <div className="modal-content" style={{color: "#000"}}>
            <h4>5 Star Resort.</h4>
            <p >
            The magnificent cottages at Kashari Farm Resort feature spacious master bedroom with an ensuite bathroom and dressing area, an extensive drawing room with a plasma TV, an audio
            centre and an integrated workspace, a private dining room and a kitchen, a bar, an entrance lobby
            and a guest washroom
            </p>
            <button className="close-modal" onClick={toggleResort}>
            &#10008;
            </button>
          </div>
        </div>
      )}</div>
                  </div>

              </div>
              <div className="grid-item-action">
              <div className='grid-item-action__icon'>
                  <MdNaturePeople fontSize='5rem'/></div>
                  <div className='grid-item-action__heading heading-tetiary u-margin-bottom-small'>
                    <h2>Nature Walks</h2>
                  </div>
                  <div className='grid-item-action__box'>
                    <div className='grid-item-action__para'>A 2 hours walk from the hotel, enjoy
                    <span onClick={toggleModal} className="btn-modal">...</span>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content" style={{color: "#000"}}>
            <h4>Nature Walks.</h4>
            <p >
            A 2 hours walk from the hotel, enjoy the 1900 acres of forest, domestic animals and fields. A
            host to more than 10 species of cattle, sheep, and goats the farm holds exotic and indigenous
            cattle, sheep goats and rabbits. Learn about the best modern farming practices, local trees, birds,
            butterflies and more from 6:00 am until 06:00 pm.
            </p>
            <button className="close-modal" onClick={toggleModal}>
            &#10008;
            </button>
          </div>
        </div>
      )}
                    </div>
                  </div>
              </div>
              <div className="grid-item-action">
              <div className='grid-item-action__icon'>
                  <GiCow fontSize='5rem'/></div>
                  <div className='grid-item-action__heading heading-tetiary u-margin-bottom-small'>
                    <h2>Cattle Breeding
                    </h2>
                  </div>
                  <div className='grid-item-action__box'>
                    <div className='grid-item-action__para'>In African, cattle breeding has to contend seriously.
                    <span onClick={toggleCattle} className="btn-modal">...</span>
      {cattle && (
        <div className="modal">
          <div onClick={toggleCattle} className="overlay"></div>
          <div className="modal-content" style={{color: "#000"}}>
            <h4>Cattle Breeding.</h4>
            <p >
            In African, cattle breeding has to contend seriously with space and time constraints and hence,
            the critical choice would be a few highly selected parents to go into the next cycle of breeding
            and also into hybrid seed production due to their close linkage. The breeding program may use
            either artificial insemination (AI) or natural service. Modern development of artificial
            insemination occurred in the 1930s and 1940s; it is widely used in dairy cattle but is used much
            less in beef cattle because of handling and labor costs. Learn more with us at JLV Mixed Farm.
            </p>
            <button className="close-modal" onClick={toggleCattle}>
            &#10008;
            </button>
          </div>
        </div>
      )}
                  </div>
                  </div>
              </div>
              <div className="grid-item-action">
              <div className='grid-item-action__icon'>
                  <GiGrass fontSize='5rem'/></div>
                  <div className='grid-item-action__heading heading-tetiary u-margin-bottom-small'>
                    <h2>Hay & Silage Preparation</h2>
                  </div>
                  <div className='grid-item-action__box'>
                  <div className='grid-item-action__para'>How to improve the nutrition of your animals during the dry
                  <span onClick={toggleHay} className="btn-modal">...</span>
      {hay && (
        <div className="modal">
          <div onClick={toggleHay} className="overlay"></div>
          <div className="modal-content" style={{color: "#000"}}>
            <h4>Hay & Silage Preparation</h4>
            <p >
            How to improve the nutrition of your animals during the dry season is quite a challenging job.
            During the the dry season, the major fodders available are bits of elephant grass or maize straw,
            together with hay and concentrated feeds. As a minimum, it is essential to provide a green fodder
            supplement to enhance rumen function for bovine animals. Therefore, one should learn how to
            make silage for sustainable mixed farming. For smallholder farmers with limited production
            capacity, finding enough feed in the dry season months to maintain good milk production is
            always a problem. Many are forced to buy hay, concentrates or silage just to keep their animals
            alive and are unable to benefit due to the higher prices paid for animal feed in the dry months.
            JLV Mixed Farm offers you a hands-on training to manufacture your own silage or hay within
            reach available resources at your farm.
            </p>
            <button className="close-modal" onClick={toggleHay}>
            &#10008;
            </button>
          </div>
        </div>
      )}
                  </div>
                  </div>
              </div>
              <div className="grid-item-action">
              <div className='grid-item-action__icon'>
                  <MdModelTraining fontSize='5rem'/></div>
                  <div className='grid-item-action__heading heading-tetiary u-margin-bottom-small'>
                    <h2>Internship & Training</h2>
                  </div>
                  <div className='grid-item-action__box'>
                    <div className='grid-item-action__para'>Are you a farmer or agriculturalist!? JLV Mixed farm offers
                    <span onClick={toggleIntern} className="btn-modal">...</span>
      {intern && (
        <div className="modal">
          <div onClick={toggleIntern} className="overlay"></div>
          <div className="modal-content" style={{color: "#000"}}>
            <h4>Internship & Training</h4>
            <p >
            Are you a farmer or agriculturalist!? JLV Mixed farm offers you a wide range of hands-on
            trainings in animal and crop husbandry with how you can synchronize the two modes of farming
            for maximum profits.
            </p>
            <button className="close-modal" onClick={toggleIntern}>
            &#10008;
            </button>
          </div>
        </div>
      )}
                  </div>
                  </div>
              </div>
</div>
    </div>
  )
}
