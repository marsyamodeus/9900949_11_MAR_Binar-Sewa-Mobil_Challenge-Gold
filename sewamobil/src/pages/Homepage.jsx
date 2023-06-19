import React from 'react';


import {menuList, ousSect, whyUsSect, testiSect, faqSect} from '../helpers/constants';
import './homepage.css'

import MainNavbar from '../components/MainNavbar';
import logoPic from '/logo.png';
import Hero from '../components/Hero';
import Ourservices from '../components/Ourservices';
import Whyus from '../components/Whyus';
import Testimonial from '../components/Testimonial';
import CtaBanner from '../components/CtaBanner';
import Faq from '../components/Faq';
import Footer from '../components/Footer';


const Homepage = () => {
  return (
    <div>
        <div id='upperSect'>
          <MainNavbar menu={menuList} logo= {logoPic}/>
          <Hero showBtn={true} showHea={true} showPic={true}/>
        </div>
        <Ourservices service={ousSect}/>
        <Whyus wuitem={whyUsSect} />
        <Testimonial testitem={testiSect}/>
        <CtaBanner />
        <Faq questions={faqSect}/>
        <Footer />
    </div>
  )
}

export default Homepage;