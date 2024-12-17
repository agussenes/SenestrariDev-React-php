import React from "react";
import { Container, Button } from "react-bootstrap";
import "animate.css";
import "../../styles/contact/HeroContact.css";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="glass-box animate__animated animate__fadeInUp">
        <Container className="text-center">
          <h1 className="hero-title">Hablemos de tu próximo proyecto</h1>
          <p className="hero-subtitle">
            Contácta conmigo y llevemos tu idea al siguiente nivel.
          </p>
          <Button
            variant="primary"
            className="hero-btn animate__animated animate__pulse infinite-btn"
            href="#contact"
          >
            Contactame
          </Button>
        </Container>
      </div>
    </section>
  );
};

export default ContactHero;
