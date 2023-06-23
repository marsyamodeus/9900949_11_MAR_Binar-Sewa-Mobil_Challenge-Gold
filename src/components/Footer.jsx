import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import './footer.css';

//footer-related
import iconFb from '../assets/icon_fb.png';
import iconIg from '../assets/icon_ig.png';
import iconTw from '../assets/icon_tw.png';
import iconEm from '../assets/icon_em.png';
import iconTc from '../assets/icon_tc.png';
import binarLogo from '../assets/logo.png';

const Footer = () => {
  return (
    <Container id='fooCont'>
        <Row id='fooRow'>
            <Col id='fooCol1'>
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </Col>
            <Col id='fooCol2'>
                <a href='#ourservice'>Our services</a>
                <a href='#whyus'>Why us</a>
                <a href='#testimonial'>Testimonial</a>
                <a href='#faq'>Faq</a>
            </Col>
            <Col id='fooCol3'>
                <p>Connect with us</p>
                <Col id='connCol'>
                    <img src= {iconFb} alt='iconfb'/>
                    <img src= {iconIg} alt='iconig'/>
                    <img src= {iconTw} alt='icontw'/>
                    <img src= {iconEm} alt='iconem'/>
                    <img src= {iconTc} alt='icontc'/>
                </Col>
            </Col>
            <Col id='fooCol4'>
                <p>Copyright Binar 2022</p>
                <img src={binarLogo} alt='logo'/>
            </Col>
        </Row>
        
    </Container>
  )
}

export default Footer