import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

function Navigation() {
  return (
    <>

<Navbar collapseOnSelect expand="lg" bg="light">
  <Container>
  <Navbar.Brand href="home">LOGO</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="about">ABOUT</Nav.Link>
      <Nav.Link href="community">COMMUNITY</Nav.Link>
      <Nav.Link href="location">LOCATION</Nav.Link>
      <Nav.Link href="ourMenu">OUR MENU</Nav.Link>
      <Nav.Link href="recipes">RECIPES</Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link href="#deets">CONTACT</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">LOGIN</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


{/* <ul>
  <li>
    <Link to="/">LOGO</Link>
  </li>
  <li>
    <Link to="/about">ABOUT</Link>
  </li>
  <li>
    <Link to="/community">COMMUNITY</Link>
  </li>
  <li>
    <Link to="/location">LOCATION</Link>
  </li>
  <li>
    <Link to="/ourMenu">OUR MENU</Link>
  </li>
  <li>
    <Link to="/recipes">RECIPES</Link>
  </li>
</ul> */}
    </>
  )
}

export default Navigation