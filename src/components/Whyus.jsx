import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './whyus.css'

const Whyus = ({wuitem}) => {
  return (
    <Container id='whyCont'>
        <Row id='whyRow1'>
            <h1 id='whyHea'>Why Us?</h1>
            <p id='whyPar'>Mengapa harus pilih Binar Car Rental?</p>
        </Row>
        <Row id='whyRow2'>
            {
                wuitem.map((item)=>
                <Col id='whyItem' xs={12} md={2}>
                    <Row><img src={item.icon} alt='icon'style={{width: '48px', height: 'auto', margin:'16px' }}/></Row>
                    <Row><p id='wuTit'>{item.title}</p></Row>
                    <Row><p id='wuPar'>{item.text}</p></Row>
                </Col>
                )
            }

        </Row>
    </Container>
  )
}

export default Whyus