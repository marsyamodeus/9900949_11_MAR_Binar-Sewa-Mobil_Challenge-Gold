import React from 'react';
import './carresult.css';

import {menuList} from '../helpers/constants';
import logoPic from '../assets/logo.png';

import MainNavbar from '../components/MainNavbar'
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import CarCard from '../components/CarCard';
import SearchBar from '../components/SearchBar';

const CarResult = () => {
  return (
    <div>
      <div id='upperSect'>
        <MainNavbar menu={menuList} logo= {logoPic}/>
        <Hero showBtn={false} showHea={false} showPic={false}/>
      </div>
      <SearchBar />
      <div id='cardHolder'>
        <CarCard />
      </div>
      <Footer />
    </div>
  )
}

export default CarResult