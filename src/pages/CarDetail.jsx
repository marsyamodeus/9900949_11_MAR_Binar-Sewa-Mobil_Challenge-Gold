import React from 'react';
import './cardetail.css';

import MainNavbar from '../components/MainNavbar'
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import DetailPack from '../components/DetailPack';

import {menuList, packInDb, packExDb,packRrDb} from '../helpers/constants';
import logoPic from '../assets/logo.png';

const CarDetail = () => {
  return (
    <div>
      <div id='upperSect'>
        <MainNavbar menu={menuList} logo= {logoPic}/>
        <Hero showBtn={false} showHea={false} showPic={false}/>
      </div>
      <DetailPack incdb={packInDb} excdb={packExDb} rrodb={packRrDb} />
      <Footer />
    </div>
  )
}

export default CarDetail