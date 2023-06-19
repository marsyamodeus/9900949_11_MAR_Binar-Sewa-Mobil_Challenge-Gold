import React from 'react'


import { Container, Nav, Navbar } from 'react-bootstrap';
import './MainNavbar.css'

const MainNavbar = ({menu,logo}) => {
  return (
    <Navbar className='thenavs' collapseOnSelect expand="lg" variant="light" sticky='top'>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          
          {menu.map((item)=>( 
            <Nav>
              <Nav.Link href={item.link}>{item.text}</Nav.Link>
            </Nav>
          ))
          }
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNavbar