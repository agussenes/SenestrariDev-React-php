import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaLaptopCode } from "react-icons/fa"; // Icono de notebook
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "animate.css";
import "../styles//reutilizables/TestimonialSection.css"; 

const testimonials = [
  {
    id: 1,
    name: "Constanza Garcia",
    role: "CEO de UnenGroup",
    website: "https://unengroup.com.ar",
    img: "/assets/imagenes/testimonials/logoConFondoYNombre.png",
    message:
      "En primer lugar quiero agradecer a Agustín, por su entrega y compromiso, y destacar que capto desde el minuto cero la esencia de la marca, cada entrega que hizo fue superadora en mis expectativas y así sucedió en cada etapa de presentación revalidando su alto profesionalismo. Feliz del resultado conseguido!!! Gracias!!!!",
  },
  {
    id: 2,
    name: "Ramenfactory",
    role: "Inovandodes.com",
    website: "https://inovandodes.com",
    img: "/assets/imagenes/testimonials/ramensito.jpg",
    message:
      "El sitio web desarrollado por Agustin transformó nuestra presencia en línea. Capturó a la perfección la esencia de nuestro local de ramen y brindó a nuestros clientes una experiencia atractiva y sencilla.",
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimoniales" className="testimonial-section py-5">
      <Container>
        {/* Título */}
        <div className="text-center mb-5 animate__animated animate__fadeInUp">
          <h2 className="section-title text-light">EXPERIENCIAS DE CLIENTES</h2>
          <p className="text-light">
            Escucha lo que mis clientes tienen para contarte!
          </p>
        </div>

        {/* Swiper Container */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          className="testimonial-swiper"
          loop = 'true'
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="animate__animated animate__fadeInUp">
              <Card className="testimonial-card shadow-sm p-4 rounded">
                {/* Header */}
                <div className="testimonial-header d-flex align-items-center mb-3">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h5 className="fw-bold mb-0">{testimonial.name}</h5>
                    <small className="text-light">{testimonial.role}</small>
                  </div>
                </div>

                {/* Testimonial Message */}
                <Card.Body>
                  <p className="fst-italic text-light">{testimonial.message}</p>
                  <div className="text-center mt-3">
                    <FaLaptopCode className="notebook-icon" />
                  </div>
                  <div className="text-center mt-3">
                    <Button
                      href={testimonial.website}
                      target="_blank"
                      variant="primary"
                      className="btn-website text-uppercase"
                    >
                      Ver Sitio Web
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default TestimonialSection;
