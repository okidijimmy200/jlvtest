import React from 'react'
import './AboutFeature.scss'

import Farm1 from '../../../images/Slide-1.png'
import Farm2 from '../../../images/Slide-2.png'
import Farm3 from '../../../images/Slide-3.png'

interface ChildProps2  {
    farm: boolean;
    diary: boolean;
    resort: boolean;
    onclick?: () => void;
    diaryHandler?: () => void;
    resortHandler?: () => void;
}

export default function AboutFeature({farm, diary, resort, onclick, diaryHandler, resortHandler}: ChildProps2) {
  return (
    <section className='section-aboutFeatures'>
        <div className='row'>
        <div className="col-1-of-2">
                        <div className="composition">
                                <div ><img src={Farm3}  alt="farm-1" className="composition__photo composition__photo--p1"/></div>
                            <div ><img src={Farm2}  alt="farm-2" className="composition__photo composition__photo--p2"/></div>
                            <div ><img src={Farm1} alt="farm-3" className="composition__photo composition__photo--p3"/></div>
           
                        </div>
                       .
                    </div>
                    <div className='col-1-of-2'>
                    {farm && !diary && !resort && 
                        <div className='features--header'>
                        <h3 className="heading-tetiary u-margin-bottom-small">JLV Mixed Farm</h3>
                        <p className="paragraph">
                        Nestled in the gently sloping hills of Rubaya, Kashari, Mbarara district, lies JLV Mixed farm: A
                        model Farm like no other! Featuring a wide array of livestock, food crops, cash crops and all
                        things natural, we are a haven for all avid farmers. Be it someone who is willing to learn about
                        farming from scratch, or someone trying to improve on the knowledge they already have. 
                        </p>
                        {/* <h3 className="heading-tetiary u-margin-bottom-small"></h3> */}
                        <p className="paragraph">
                        With
                        comprehensive records dating back to our inception in 2008, you will be able to track our
                        progress in terms of improvement of animal breeds, use of scientific methods, all the way to our
                        current projects of value addition.
                        </p>
                        </div>
}
{!farm && diary && !resort && 
                        <div className='features--header'>
                        <h3 className="heading-tetiary u-margin-bottom-small">JLV Mixed Farm</h3>
                        <p className="paragraph">

                        </p>
                        </div>
}

{!farm && !diary && resort && 
                        <div className='features--header'>
                        <h3 className="heading-tetiary u-margin-bottom-small">Kashari Farm Resort</h3>
                        <p className="paragraph">
                        Nestled on the dew kissed sloping hills of Rubaya, Kashari, Mbarara district, lies Kashari Farm
Resort. The last word of in luxury seated on the same piece of land as JLV mixed Farm, Kasharis
Farm Resort offers a wide range of exquisite services like, first class cottages with an obscure
view of the Mbarara ranges, nature walks, swimming, a wide range of African and Asian dishes,
bird watching and modern farming exploration. Kashari Farm Resort offers a deep connection to
its surroundings, with a character steeped in the culture, cuisine, heritage, and architecture of its
location. 
With our unique locale, we share a passion for the discovery and new experiences that
make your stay unforgettable. This passion is revealed through varied activities such as a
traditional nature walks, a cooking class led by a master chef, or perhaps a haven for all avid
tourists.

                        </p>
                        </div>
}

                    </div>
        </div>
                            
    </section>
  )
}
