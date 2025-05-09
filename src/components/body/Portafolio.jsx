import { useState } from "react";
import { Helmet } from 'react-helmet-async';
import SEOJsonLD from '../partials/SEOJsonLD';
import proyectosData from '../../data/proyectos';
import BannerContact from '../reutilizables/BannerContact';


import HeroPortafolio from "../body/portafolio/HeroPortafolio";
import Filtros from "../body/portafolio/FiltroPortafolio";
import GaleriaProyectos from "../body/portafolio/GaleriaProyectos";
import ModalDetalles from "../body/portafolio/ModalDetalles";

import '../styles/portafolio/Portafolio.css';

const Portafolio = () => {


    const [filtro, setFiltro] = useState("todos");
    const [modal, setModal] = useState({ show: false, proyecto: null });

    const proyectosFiltrados = proyectosData.filter((proyecto) => {
        if (filtro === "todos") return true;
        return proyecto.categoria === filtro || proyecto.tecnologias.includes(filtro);
      });

    return (
        <>
            <Helmet>
                <title>Portafolio | Proyectos Realizados - Senestrari Dev</title>
                <meta name="description" content="Descubrí el portafolio profesional de Senestrari Dev: sitios web modernos, aplicaciones interactivas y soluciones web a medida desarrolladas con tecnologías como React, Node.js, WordPress y más." />

                <meta property="og:title" content="Portafolio | Trabajos realizados - Senestrari Dev" />
                <meta property="og:description" content="Explorá mis trabajos: desde landing pages hasta sistemas completos. Todo hecho con amor al código." />
                <meta property="og:image" content="https://senestraridev.com/assets/imagenes/faviconLogo/logoSenestraridevH.png" />
                <meta property="og:url" content="https://senestraridev.com/portafolio" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Portafolio | Proyectos Full Stack" />
                <meta name="twitter:description" content="Mirá mi portfolio de proyectos: soluciones reales para clientes reales." />
                <meta name="twitter:image" content="https://senestraridev.com/assets/imagenes/faviconLogo/logoSenestraridevH.png" />

                <link rel="canonical" href="https://senestraridev.com/portafolio" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <SEOJsonLD />
            <div>
                <HeroPortafolio />
                <div className="">
                <Filtros setFiltro={setFiltro} />
                </div>
                
                <div className="contenedorGaleria  py-4">
                    <GaleriaProyectos proyectos={proyectosFiltrados} abrirModal={(proyecto) => setModal({ show: true, proyecto })} />

                </div>
                <BannerContact />
                {modal.proyecto && (
                    <ModalDetalles
                        proyecto={modal.proyecto}
                        show={modal.show}
                        onHide={() => setModal({ show: false, proyecto: null })}
                    />
                )}
            </div>
        </>
    );
};

export default Portafolio;
