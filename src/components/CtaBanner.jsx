import React from 'react';
import { Container, Col, Button } from 'react-bootstrap';
import './ctabanner.css';

const CtaBanner = () => {
  return (
    <Container id='ctaBg'>
        <Col className='text-center'>
            <h1 id='ctaHea'>Sewa Mobil di (Lokasimu) Sekarang</h1>
            <p id='ctaPar'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <Button variant="custom">Mulai Sewa Mobil</Button>
        </Col>
        
    </Container>
  )
}

export default CtaBanner