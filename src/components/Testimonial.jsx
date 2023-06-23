import React, { Component }  from 'react';
import { Container, Row, Carousel, Card } from 'react-bootstrap';
import './testimonial.css';
// import Slider from "react-slick";
// import CarouselSlick from './CarouselSlick';

const Testimonial = ({testitem}) => {
  return (
    <Container id='tesCont'>
        <Row id='tesRow1'>
          <h1 id='tesHea'>Testimonial</h1>
          <p id='tesPar'>Berbagai review positif dari para pelanggan kami</p>
        </Row>
        <Row id='tesRow2'>

          {/* <CarouselSlick /> */}

          <Carousel id='revCaro' interval={null}>
            {
              testitem.map((item)=>
                <Carousel.Item className='itemCaro'>
                <Card id="revCard" >
                  <Card.Body id='revBody'>
                    <div id="revPic">
                      <img src={item.pic} alt='testi pic' />
                    </div>
                    <div className="revCont">
                      <img id='revSta' src='stars.png' alt='bintang5'/>
                      <p id='revTex'>{item.text}</p>
                      <p id='revPer'>{item.person}</p>
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              )
            }
            
          </Carousel>
        </Row>
    </Container>
  )
}

export default Testimonial