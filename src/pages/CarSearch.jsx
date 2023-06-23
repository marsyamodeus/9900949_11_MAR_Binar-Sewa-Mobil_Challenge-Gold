import React from 'react'

import {menuList} from '../helpers/constants';
import './carsearch.css';
import logoPic from '../assets/logo.png';

import MainNavbar from '../components/MainNavbar'
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

const CarSearch = () => {
  return (
    <div>
      <div id='upperSect'>
        <MainNavbar menu={menuList} logo= {logoPic}/>
        <Hero showBtn={false} showHea={true} showPic={true}/>
      </div>
      <SearchBar />
      
      <Footer />
    </div>
  )
}

export default CarSearch