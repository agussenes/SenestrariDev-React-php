import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaLaptopCode, FaTools, FaWordpress, FaMobileAlt, FaRocket, FaHandshake } from "react-icons/fa";
import "animate.css";
import "../../styles/home/ServicesSection.css";


const servicesData = [
  {
    id: 1,
    title: "DESARROLLO WEB PERSONALIZADO",
    description: "Sitios web a medida, desde páginas de marketing y landing pages hasta sitios de una sola página, diseñados para cumplir con tus objetivos específicos.",
    icon: <FaLaptopCode />,
  },
  {
    id: 2,
    title: "APLICACIONES WEB",
    description: "Creación de aplicaciones interactivas y funcionales, adaptadas a las necesidades de tu negocio.",
    icon: <FaTools />,
  },
  {
    id: 3,
    title: "DESARROLLO CON WORDPRESS",
    description: "Diseño y personalización de sitios usando WordPress, con un enfoque en flexibilidad y facilidad de gestión.",
    icon: <FaWordpress />,
  },
  {
    id: 4,
    title: "DISEÑO RESPONSIVE",
    description: "Aseguro que tus sitios se adapten perfectamente a todos los dispositivos, ofreciendo una experiencia de usuario impecable.",
    icon: <FaMobileAlt />,
  },
  {
    id: 5,
    title: "OPTIMIZACIÓN DE RENDIMIENTO WEB",
    description: "Mejora la velocidad y el rendimiento de tu sitio web para una experiencia de usuario ágil y mejor SEO.",
    icon: <FaRocket />,
  },
  {
    id: 6,
    title: "SOPORTE Y MANTENIMIENTO DE WORDPRESS",
    description: "Actualización y optimización para asegurar un funcionamiento estable y seguro de tu sitio.",
    icon: <FaHandshake />,
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section py-5">
      <Container>
        <h2 className="text-center mb-5 animate__animated animate__fadeInDown">
          <span className="highlight">CÓMO PUEDO AYUDARTE</span>
        </h2>
        <Row>
          {servicesData.map((service, index) => (
            <Col md={6} lg={4} className="mb-4" key={service.id}>
              <Card className="service-card shadow-lg animate__animated animate__fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="service-icon">
                  {service.icon}
                </div>
                <Card.Body>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Llamada a la acción */}
        <div className="text-center mt-5 animate__animated animate__fadeInUp">
          <h3 className="cta-title mb-3">¿Listo para llevar tu proyecto al siguiente nivel?</h3>
          <Button
            href="/contact"
            variant="primary"
            className="cta-button"
            size="lg"
          >
            Contáctame Ahora
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
