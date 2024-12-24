import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/reutilizables/partialsStyles.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-2">
      <Container>
        <Row className="d-flex align-items-center">
    
          <Col md={6} className="text-start">
            <h5>Mi Filosofía de Trabajo</h5>
            <p>
              Pasión, innovación y creatividad en cada proyecto. Ofrezco un servicio de desarrollo web profesional con
              un compromiso absoluto por la calidad y la mejora continua.
            </p>
          </Col>

         
          <Col md={6} className="text-end">
            <h5>Seguime en Redes</h5>
            <ul className="list-unstyled d-flex justify-content-end gap-3">
              <li>
                <a href="https://www.instagram.com/agussenestrari/" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram text-light fs-4"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/agustin-senestrari/" target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin text-light fs-4"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/agussenes" target="_blank" rel="noreferrer">
                  <i className="bi bi-github text-light fs-4"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <hr className="border-light" />
            <p className="mb-0">&copy; {new Date().getFullYear()} Senestrari Dev - Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
