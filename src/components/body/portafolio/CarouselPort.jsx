import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "../../styles/portafolio/carouselPort.css";

const CarouselPort = ({ imagenes }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop 
      className="contenedorImagen"
    >
      {imagenes.map((imagen, index) => (
        <SwiperSlide key={index}>
          <img src={imagen} alt={`Slide ${index}`} className="img-fluid" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselPort;
