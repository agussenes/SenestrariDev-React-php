import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "animate.css";
import "../styles/contact/FAQSection.css";

const FAQSection = () => {
  const faqs = [
    { question: "¿Qué tecnologías utilizas?", answer: "React.js, Node.js, PHP y WordPress." },
    { question: "¿Cuánto tiempo demora un proyecto?", answer: "Entre 2 y 6 semanas dependiendo del alcance." },
    { question: "¿Ofreces soporte post-lanzamiento?", answer: "Sí, incluyo mantenimiento opcional." },
  ];

  return (
    <section className="faq-section py-5">
      <Container>
        <h2 className="text-center mb-4 animate__animated animate__fadeInDown">
          Preguntas Frecuentes
        </h2>
        <Accordion className="custom-accordion">
          {faqs.map((faq, index) => (
            <Accordion.Item
              eventKey={index}
              key={index}
              className="custom-accordion-item animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <Accordion.Header className="custom-header">{faq.question}</Accordion.Header>
              <Accordion.Body className="custom-body">
                {faq.answer}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQSection;
