import React from 'react'
import AboutCard from '../about/AboutCard'
import Hero from '../hero/Hero'
import HAbout from './HAbout'
import Testimonal from './testimonal/Testimonal'
import Hblog from "./Hblog"
import Hprice from "./Hprice"
const Home = () => {
  return (
    <div>
        <Hero/>
        <div className="margin"></div>
        <AboutCard/>
        <HAbout/>
        <Testimonal/>
        <Hblog />
      <Hprice />
    </div>
  )
}

export default Home