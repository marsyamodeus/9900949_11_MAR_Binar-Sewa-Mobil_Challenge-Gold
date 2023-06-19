import React from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './hero.css';

const Hero = ({showBtn, showHea, showPic}) => {
  return (
    <Container className='heroCont' >
      <Row >  
        <Col id='heroCol1' xs={12} md={6}>
          {
            showHea && <h1 id='heroHea'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          }
          {
            showHea && <p id='heroPar'>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          }
          
          <Link to ={'/CarSearch'}>
            {showBtn && <Button variant="custom">Mulai Sewa Mobil</Button>}
            
          </Link>
        
        </Col>
        <Col id='heroCol2' xs={12} md={4}>
          {showPic && <img id='heroPic' src='mobil.png' alt='gambar mobil'/>}
          
        </Col>
      </Row>
    
    </Container>
  )
}

export default Hero