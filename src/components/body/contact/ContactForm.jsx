import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import "../../styles/contact/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState({ name: false, email: false, message: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field) => {
    setFocused({ ...focused, [field]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      toast.success("¡Mensaje enviado con éxito!", { position: "top-center" });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Por favor, completa todos los campos.");
    }
  };

  return (
    <section className="contact-form py-5" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="animate__animated animate__fadeInUp">
            <div className="form-container p-4 shadow-lg rounded">
              <h2 className="text-center mb-4 text-uppercase">Contáctame</h2>
              <Form onSubmit={handleSubmit}>
                {/* Nombre */}
                <Form.Group className="mb-4" controlId="formName">
                  <div className={`form-icon floating-label ${focused.name || formData.name ? "active" : ""}`}>
                    <FaUser className="input-icon" />
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus("name")}
                      onBlur={() => handleBlur("name")}
                      required
                    />
                    <label className="floating-text">Nombre Completo</label>
                  </div>
                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-4" controlId="formEmail">
                  <div className={`form-icon floating-label ${focused.email || formData.email ? "active" : ""}`}>
                    <FaEnvelope className="input-icon" />
                    <Form.Control
                      type="email"                
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus("email")}
                      onBlur={() => handleBlur("email")}
                      required
                    />
                    <label className="floating-text">Correo Electrónico</label>
                  </div>
                </Form.Group>

                {/* Mensaje */}
                <Form.Group className="mb-4" controlId="formMessage">
                  <div className={`form-icon floating-label ${focused.message || formData.message ? "active" : ""}`}>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus("message")}
                      onBlur={() => handleBlur("message")}
                      required
                    />
                    <label className="floating-text">Escribe tu mensaje aquí</label>
                  </div>
                </Form.Group>

                {/* Botón */}
                <div className="text-center">
                  <Button variant="primary" type="submit" className="btn-cta text-uppercase">
                    <FaPaperPlane className="me-2" /> Enviar Mensaje
                  </Button>
                </div>
              </Form>
            </div>

            {/* Redes Sociales */}
            <div className="social-icons mt-5 text-center">
              <h5 className="animate__animated animate__fadeInDown mb-4">
                Sígueme en redes sociales
              </h5>
              <a href="https://github.com" target="_blank" className="social-link">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" className="social-link">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://instagram.com" target="_blank" className="social-link">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </section>
  );
};

export default ContactForm;
