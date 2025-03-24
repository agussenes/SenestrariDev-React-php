import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOJsonLD from '../partials/SEOJsonLD';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Servicios | Senestrari Dev - Soluciones Web a Medida</title>
        <meta name="description" content="Conocé los servicios de desarrollo web personalizados que ofrece Senestrari Dev: aplicaciones web, sitios en WordPress, diseño responsive, y más." />

        {/* OG */}
        <meta property="og:title" content="Servicios | Senestrari Dev" />
        <meta property="og:description" content="Soluciones Full Stack: desde páginas informativas hasta plataformas completas con tecnologías modernas como React, Node.js y WordPress." />
        <meta property="og:image" content="https://senestraridev.com/path/to/preview-image.jpg" />
        <meta property="og:url" content="https://senestraridev.com/services" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Servicios | Senestrari Dev" />
        <meta name="twitter:description" content="Desarrollo profesional con foco en experiencia de usuario y rendimiento web." />
        <meta name="twitter:image" content="https://senestraridev.com/path/to/preview-image.jpg" />

        <link rel="canonical" href="https://senestraridev.com/services" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <SEOJsonLD />
      {/* JSX de sección servicios */}
    </>
  );
};

export default Services;
