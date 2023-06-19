import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import './faq.css';

const Faq = ({questions}) => {
  return (
    <Container id='faqCont'>
        <Row>
            <Col xs={12} md={6}>
              <h1 id='faqHea'>Frequently Asked Question</h1>
              <p id='faqPar'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </Col>
            <Col xs={12} md={6}>
              {
                questions.map((item, key)=>
                <Accordion>
                <Accordion.Item eventKey={key}>
                  <Accordion.Header>{item.quest}</Accordion.Header>
                  <Accordion.Body>{item.ans}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
                )
              }
              
            </Col>
        </Row>
    </Container>
  )
}

export default Faq