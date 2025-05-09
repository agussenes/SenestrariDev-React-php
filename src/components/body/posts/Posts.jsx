import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "animate.css";
import "./Posts.css"; 
const PostsEnConstruccion = () => {
  return (
    <section className="posts-construccion d-flex align-items-center py-5">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <Card className="shadow-lg border-0 animate__animated animate__fadeInUp p-4">
              <Card.Body>
                <h2 className="mb-4 animate__animated animate__pulse animate__delay-1s">
                  🚧 Estamos trabajando en esta vista
                </h2>
                <p className="lead">
                  Muy pronto vas a poder explorar artículos, novedades y
                  contenido exclusivo sobre desarrollo web, tecnología y los
                  proyectos que estamos creando en <strong>Senestrari Dev</strong>.
                </p>
                <p className="mt-4 text-muted">
                  Seguimos construyendo ideas con pasión 💻🚀
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PostsEnConstruccion;
