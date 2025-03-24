import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOJsonLD from '../partials/SEOJsonLD';

const Posts = () => {
  return (
    <>
      <Helmet>
        <title>Posts | Novedades y Proyectos - Senestrari Dev</title>
        <meta name="description" content="Mirá los últimos proyectos, avances y noticias en el desarrollo web de Senestrari Dev. Siempre actualizado con lo más nuevo en React, Node.js, WordPress y más." />

        <meta property="og:title" content="Posts | Novedades de Senestrari Dev" />
        <meta property="og:description" content="Explorá los últimos sitios creados, mejoras y noticias desde el mundo del desarrollo web full stack." />
        <meta property="og:image" content="https://senestraridev.com/assets/imagenes/faviconLogo/logoSenestraridevH.png" />
        <meta property="og:url" content="https://senestraridev.com/posts" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Posts | Novedades y proyectos - Senestrari Dev" />
        <meta name="twitter:description" content="Seguime para ver mis últimas creaciones web y noticias del mundo tech." />
        <meta name="twitter:image" content="https://senestraridev.com/assets/imagenes/faviconLogo/logoSenestraridevH.png" />

        <link rel="canonical" href="https://senestraridev.com/posts" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    <SEOJsonLD />
      {/* Contenido de novedades / posts */}
    </>
  );
};

export default Posts;
