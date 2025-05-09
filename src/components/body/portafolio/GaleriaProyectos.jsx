import Carrusel from "./CarouselPort";
import './GaleriaProyectos.css'

const GaleriaProyectos = ({ proyectos, abrirModal }) => {
  return (
   <div className="contenedorGaleriaPort container">
     <div className="row g-4">
      {proyectos.map((proyecto) => (
        <div key={proyecto.id} className="col-md-4 animate__animated animate__fadeInUp">
          <div className="card">
            {/* Usa el Carrusel aquí */}
            <div className="contenedorImagen">
              <Carrusel imagenes={proyecto.imagenes} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{proyecto.titulo}</h5>
              <p className="card-text">{proyecto.descripcion}</p>
              <button className="btn btn-info" onClick={() => abrirModal(proyecto)}>
                Ver Más
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
   </div>
  );
};

export default GaleriaProyectos;
