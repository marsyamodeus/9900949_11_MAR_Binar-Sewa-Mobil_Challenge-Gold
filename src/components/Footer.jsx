import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import './footer.css';


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
                    <img src='icon_fb.png' alt='iconfb'/>
                    <img src='icon_ig.png' alt='iconig'/>
                    <img src='icon_tw.png' alt='icontw'/>
                    <img src='icon_em.png' alt='iconem'/>
                    <img src='icon_tc.png' alt='icontc'/>
                </Col>
            </Col>
            <Col id='fooCol4'>
                <p>Copyright Binar 2022</p>
                <img src='logo.png' alt='logo'/>
            </Col>
        </Row>
        
    </Container>
  )
}

export default Footer