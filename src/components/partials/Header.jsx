import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top" className="py-3">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/assets/imagenes/faviconLogo/logo.png"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Senestrari Dev
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/services">Servicios</Nav.Link>
            <Nav.Link as={Link} to="/portafolio">Portafolio</Nav.Link>
            <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
          </Nav>
          <div className="ms-3">
            <Button
              variant="outline-primary"
              as={Link}
              to="/login"
              className="me-2 custom-button"
            >
              Login
            </Button>
            <Button
              variant="primary"
              as={Link}
              to="/register"
              className="custom-button"
              id='botonRegistro'
            >
              Register
            </Button>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
