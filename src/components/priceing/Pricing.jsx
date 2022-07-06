import React from 'react'
import Back from '../common/back/Back'
import PriceCard from './PriceCard'
import './price.css'
import Faq from './Faq'
const Pricing = () => {
  return (
    <div>
        <Back title='choose the plan'/>
        <section className='price padding'>
            <div className="pric"></div>
        <div className='container grid'>
            
          <PriceCard />
        </div>
      </section>
<Faq/>
    </div>
  )
}

export default Pricing