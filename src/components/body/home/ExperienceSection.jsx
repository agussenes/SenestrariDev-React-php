import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaWordpress,
  FaCode

} from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiTypescript, SiPhp } from "react-icons/si";
import "animate.css";
import "../../styles/home/ExperienceSection.css";

const ExperienceSection = () => {
  return (
    <section className="experience-section py-5">
      <Container>
        {/* Título con efecto de escritura automática */}
        <div className="text-center mb-5">
          <h2 className="title-typing animate__animated animate__fadeIn">
            <Typewriter
              options={{
                strings: [
                  "DESARROLLADOR FRONT-END",
                  "DESARROLLADOR BACK-END",
                  "EXPERTO EN TECNOLOGÍAS MODERNAS",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h2>
        </div>

        {/* Sección de tarjetas */}
        <Row className="g-4">
          {/* Front-End */}
          <Col md={4} sm={6}>
            <Card className="custom-card shadow-lg">
              <Card.Body>
                <h4 className="card-title">Front-End</h4>
                <ul className="list-unstyled">
                  <li>
                    <FaJs className="icon-style" /> JavaScript
                  </li>
                  <li>
                    <FaHtml5 className="icon-style" /> HTML
                  </li>
                  <li>
                    <FaCss3Alt className="icon-style" /> CSS y Bootstrap
                  </li>
                  <li>
                    <FaReact className="icon-style" /> React.js
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Back-End */}
          <Col md={4} sm={6}>
            <Card className="custom-card shadow-lg">
              <Card.Body>
                <h4 className="card-title">Back-End</h4>
                <ul className="list-unstyled">
                  <li>
                    <FaNodeJs className="icon-style" /> Node.js
                  </li>
                  <li>
                    <SiPhp className="icon-style" /> PHP
                  </li>
                  <li>
                    <SiMongodb className="icon-style" /> MongoDB
                  </li>
                  <li>
                    <SiMysql className="icon-style" /> MySQL
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* Tecnologías */}
          <Col md={4} sm={12}>
            <Card className="custom-card shadow-lg">
              <Card.Body>
                <h4 className="card-title">Tecnologías</h4>
                <ul className="list-unstyled">
                  <li>
                    <SiExpress className="icon-style" /> Express
                  </li>
                  <li>
                    <FaCode className="icon-style" /> EJS
                  </li>
                  <li>
                    <SiTypescript className="icon-style" /> TypeScript
                  </li>
                  <li>
                    <FaWordpress className="icon-style" /> WordPress
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ExperienceSection;
