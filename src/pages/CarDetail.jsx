import React from 'react';
import './cardetail.css';

import MainNavbar from '../components/MainNavbar'
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import DetailPack from '../components/DetailPack';

import {menuList, packInDb, packExDb,packRrDb} from '../helpers/constants';
import logoPic from '/logo.png';

const CarDetail = () => {
  return (
    <div>
      <div id='upperSect'>
        <MainNavbar menu={menuList} logo= {logoPic}/>
        <Hero showBtn={false} showHea={false} showPic={false}/>
      </div>
      <SearchBar />
      <DetailPack incdb={packInDb} excdb={packExDb} rrodb={packRrDb} />
      <Footer />
    </div>
  )
}

export default CarDetail