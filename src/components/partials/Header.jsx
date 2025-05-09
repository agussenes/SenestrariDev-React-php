import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="py-3 d-flex justify-content-center"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleNavClick} className="contenedorLogoSene">
          <img
            src="/assets/imagenes/faviconLogo/logoSenestraridevH.png"
            alt="Logo senestrari dev - tu desarrollo está a tu alcance"
            width="200"
            height="auto"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavClick}>Inicio</Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={handleNavClick}>Servicios</Nav.Link>
            <Nav.Link as={Link} to="/portafolio" onClick={handleNavClick}>Portafolio</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleNavClick}>Contacto</Nav.Link>
            <Nav.Link as={Link} to="/posts" onClick={handleNavClick}>Posts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
