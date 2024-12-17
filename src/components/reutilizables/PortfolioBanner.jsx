import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "animate.css";
import "../styles/ContactBanner.css";

const PortfolioBanner = () => {
  const navigate = useNavigate();

  const handlePortfolioClick = () => {
    navigate("/portfolio"); // Ruta a tu portafolio
  };


  return (
    <section className="portfolio-banner py-5">
      <Container className="text-center">
        <div className="banner-content animate__animated animate__fadeInUp">
          <h2 className="banner-title mb-4">
            ¡Descubre mi portafolio de proyectos!
          </h2>
          <p className="banner-text mb-4">
            Explora los proyectos que he desarrollado, donde la innovación,
            creatividad y tecnología se unen para ofrecer soluciones únicas.
          </p>
          <Button
            variant=""
            className="btn-cta animate__animated animate__pulse infinite-btn"
            onClick={handlePortfolioClick}
          >
            Ver mi Portafolio
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioBanner;
