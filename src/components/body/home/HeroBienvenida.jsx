import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../../styles/home/HeroBienvenida.css';

const HeroBienvenida = () => {
  return (
    <section className="hero-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        style={{ zIndex: 1 }} // Evita problemas de superposición
        className="hero-swiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="hero-slide"
            style={{
              backgroundImage:
                'url(/assets/imagenes/home/heroBienvenida/posibleslider1.jpg)',
            }}
          >
            <div className="hero-overlay">
              <h1 className="animate__animated animate__fadeInDown">
                Bienvenido a <span>Senestrari Dev</span>
              </h1>
              <p className="animate__animated animate__fadeInUp animate__delay-1s">
                Desarrollo web moderno y funcional con tecnologías de vanguardia.
              </p>
              <div className="hero-buttons">
                <a
                  href="#services"
                  className="btn btn-primary me-2 animate__animated animate__fadeInUp animate__delay-2s"
                >
                  Conocer Servicios
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline-light animate__animated animate__fadeInUp animate__delay-2s"
                >
                  Contáctame
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="hero-slide"
            style={{
              backgroundImage:
                'url(/assets/imagenes/home/heroBienvenida/posibleslider2.webp)',
            }}
          >
            <div className="hero-overlay">
              <h1 className="animate__animated animate__fadeInDown">
                Innovación y Creatividad
              </h1>
              <p className="animate__animated animate__fadeInUp animate__delay-1s">
                Impulsa tu negocio con una presencia digital poderosa.
              </p>
              <div className="hero-buttons">
                <a
                  href="#services"
                  className="btn btn-primary me-2 animate__animated animate__fadeInUp animate__delay-2s"
                >
                  Descubre Más
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="hero-slide"
            style={{
              backgroundImage:
                'url(/assets/imagenes/home/heroBienvenida/posibleslider3.webp)',
            }}
          >
            <div className="hero-overlay">
              <h1 className="animate__animated animate__fadeInDown">
                Transforma tu Visión en Realidad
              </h1>
              <p className="animate__animated animate__fadeInUp animate__delay-1s">
                Experiencias web únicas con React.js y tecnologías modernas.
              </p>
              <div className="hero-buttons">
                <a
                  href="#portfolio"
                  className="btn btn-outline-light animate__animated animate__fadeInUp animate__delay-2s"
                >
                  Ver Proyectos
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroBienvenida;
