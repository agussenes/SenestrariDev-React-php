import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'animate.css';
import '../../styles/home/AboutSection.css'; 

const AboutSection = () => {
  return (
    <section className="about-section py-5" id="about-me">
      <Container>
        {/* Título */}
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="animate__animated animate__fadeInDown display-4  ">
              Sobre mí y mi visión
            </h2>
          </Col>
        </Row>

        {/* Imagen y Cajas de Texto */}
        <Row className="align-items-center">
          {/* Imagen con Hover */}
          <Col xs={12} md={4} className="text-center animate__animated animate__fadeInLeft">
            <div className="profile-container">
              <img
                src="/assets/imagenes/yo.jpeg"
                alt="Agustín Ezequiel Senestrari"
                className="profile-image"
              />
              <div className="profile-hover">
                <h5 className="fw-bold text-white">Agustín Ezequiel Senestrari</h5>
                <p>
                  <strong>Último Proyecto:</strong>{' '}
                  <a href="https://unengroup.com.ar" target="_blank" rel="noreferrer" className="hover-link">
                    unengroup.com.ar
                  </a>
                </p>
                <p>
                  <strong>Ante último Proyecto:</strong>{' '}
                  <a href="https://focos.ar" target="_blank" rel="noreferrer" className="hover-link">
                    focos.ar
                  </a>
                </p>
                <Button  size="sm" className="mt-3 botonHover">
                  Ver Portafolio
                </Button>
              </div>
            </div>
          </Col>

          {/* Cajas de Texto */}
          <Col xs={12} md={8} className="animate__animated animate__fadeInRight">
            <Card className="about-card mb-4">
              <Card.Body>
                <Card.Title className="fw-bold text-primary">PASIÓN POR LA TECNOLOGÍA</Card.Title>
                <Card.Text>
                  La tecnología es el motor de mi vocación. Me apasiona desarrollar soluciones web que no solo resuelvan desafíos técnicos,
                  sino que también inspiren y generen un impacto positivo.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="about-card mb-4">
              <Card.Body>
                <Card.Title className="fw-bold text-primary">APRENDIZAJE CONTINUO</Card.Title>
                <Card.Text>
                  Comprometido con el crecimiento constante, dominando nuevas tecnologías y tendencias para asegurar la mejor calidad.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="about-card">
              <Card.Body>
                <Card.Title className="fw-bold text-primary">COLABORACIÓN Y CREATIVIDAD</Card.Title>
                <Card.Text>
                  Creo en el poder de la colaboración como clave para generar resultados excepcionales y soluciones creativas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
