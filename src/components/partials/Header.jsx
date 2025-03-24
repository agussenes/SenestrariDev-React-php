import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top" className="py-3 d-flex justify-content-center">
      <Container>
        <Navbar.Brand as={Link} to="/" className='contenedorLogoSene'>
          <img
            src="/assets/imagenes/faviconLogo/logoSenestraridevH.png"
            alt="Logo senestrari de - tu desarrollo esta a tu alcance "
            width="200"
            height="auto"

          />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/services">Servicios</Nav.Link>
            <Nav.Link as={Link} to="/portafolio">Portafolio</Nav.Link>            
            <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
