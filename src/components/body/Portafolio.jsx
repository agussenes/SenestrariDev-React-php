import { useState } from "react";
// import HeroPortafolio from "../body/portafolio/HeroPortafolio";
// import Filtros from "../body/portafolio/FiltroPortafolio";
// import GaleriaProyectos from "../body/portafolio/GaleriaProyectos";
// import ModalDetalles from "../body/portafolio/ModalDetalles";
import HeroPortafolio from "../body/portafolio/HeroPortafolio";
import Filtros from "../body/portafolio/FiltroPortafolio";
import GaleriaProyectos from "../body/portafolio/GaleriaProyectos";
import ModalDetalles from "../body/portafolio/ModalDetalles";


const Portafolio = () => {

    const proyectos = [
        {
            id: 1,
            titulo: "Proyecto 1",
            categoria: "web",
            tecnologias: ["React", "Bootstrap"],
            imagenes: [
                "./assets/imagenes/home/heroBienvenida/posibleslider1.jpg",
                "./assets/imagenes/home/heroBienvenida/posibleslider2.webp"
            ],
            descripcion: "Descripción del proyecto 1",
        },
        {
            id: 2,
            titulo: "Proyecto 2",
            categoria: "php",
            tecnologias: ["React Native", "Redux"],
            imagenes: [
                "./assets/imagenes/home/heroBienvenida/posibleslider1.jpg",
                "./assets/imagenes/home/heroBienvenida/posibleslider2.webp"
            ],
            descripcion: "Descripción del proyecto 2",
        },
        {
            id: 3,
            titulo: "Proyecto 3",
            categoria: "react",
            tecnologias: ["Figma", "Photoshop"],
            imagenes: [
                "./assets/imagenes/home/heroBienvenida/posibleslider1.jpg",
                "../assets/imagenes/home/heroBienvenida/posibleslider2.webp"
            ],
            descripcion: "Descripción del proyecto 3",
        },
    ];


    const [filtro, setFiltro] = useState("todos");
    const [modal, setModal] = useState({ show: false, proyecto: null });

    const proyectosFiltrados = proyectos.filter((proyecto) => {
        if (filtro === "todos") return true;
        return proyecto.categoria === filtro || proyecto.tecnologias.includes(filtro);
    });

    return (
        <div>
            <HeroPortafolio />
            <Filtros setFiltro={setFiltro} />
            <div className="container">
                <GaleriaProyectos proyectos={proyectosFiltrados} abrirModal={(proyecto) => setModal({ show: true, proyecto })} />

            </div>
            {modal.proyecto && (
                <ModalDetalles
                    proyecto={modal.proyecto}
                    show={modal.show}
                    onHide={() => setModal({ show: false, proyecto: null })}
                />
            )}
        </div>
    );
};

export default Portafolio;
