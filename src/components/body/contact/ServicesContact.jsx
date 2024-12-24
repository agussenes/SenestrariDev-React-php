import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "animate.css";
import "../../styles/contact/ServicesContact.css";

const ServicesContact = () => {
  const services = [
    {
      title: "Desarrollo Front-End",
      description: "Interfaces modernas y rápidas con React.js, HTML y CSS.",
      icon: "bi bi-code-slash",
    },
    {
      title: "Back-End Robust",
      description: "Desarrollo de APIs seguras y escalables con Node.js.",
      icon: "bi bi-server",
    },
    {
      title: "Optimización SEO",
      description: "Mejoras en velocidad y visibilidad para tu web.",
      icon: "bi bi-speedometer2",
    },
    {
      title: "WordPress Personalizado",
      description: "Creación y personalización de sitios WordPress flexibles.",
      icon: "bi bi-wordpress",
    },
  ];

  return (
    <section className="services-contact-section py-5">
      <Container>
        <h2 className="services-contact-title text-center mb-5 animate__animated animate__fadeInDown text-uppercase">
          Mis Servicios
        </h2>
        <Row>
          {services.map((service, index) => (
            <Col
              md={6}
              lg={6}
              key={index}
              className="mb-4 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="services-contact-card shadow-sm text-center">
                <Card.Body>
                  <i
                    className={`${service.icon} services-contact-icon mb-3`}
                  ></i>
                  <Card.Title className="text-uppercase">{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesContact;
