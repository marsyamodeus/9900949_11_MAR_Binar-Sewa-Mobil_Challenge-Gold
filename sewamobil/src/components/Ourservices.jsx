import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './ourservices.css';

const Ourservices = ({service}) => {
  return (
    <Container id='ouCont'>
        <Row>
            <Col id='ouCol1' xs={12} md={6}>
                <img id='ouPic' src='cewesenyum.png' alt='cewek senyum'/>
            </Col>
            <Col id='ouCol2' xs={12} md={4}>
                <h1 id='ouHea'>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                <p id='ouPar'>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                {
                    service.map((item)=>
                    <p className='ouItem'><img src='ceklis.png' style={{width: '15px', height: 'auto' }}/> {item.text}</p>
                    )
                }
                
            </Col>
        </Row>
        
    </Container>
  )
}

export default Ourservices