import { Modal } from 'react-bootstrap';
import Carrusel from "./CarouselPort";

const ModalDetalles = ({ proyecto, show, onHide }) => {
  if (!proyecto) return null;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{proyecto.titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Usa el Carrusel aquí */}
        <Carrusel imagenes={proyecto.imagenes} />
        <p className="mt-4">{proyecto.descripcion}</p>
        {proyecto.link && proyecto.link !== "#" && (
          <a
            href={proyecto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success mt-3"
          >
            Ver sitio
          </a>
        )}

      </Modal.Body>
    </Modal>
  );
};

export default ModalDetalles;
