import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOJsonLD from '../partials/SEOJsonLD';

import HeroBienvenida from "./home/HeroBienvenida";
import AboutSection from './home/AboutSection';
import ExperienceSection from './home/ExperienceSection';
import ServicesSection from './home/ServicesSection';
import TestimonialSection from '../reutilizables/TestimonialSection';
import PortfolioBanner from "../reutilizables/PortfolioBanner";
import FAQSection from '../reutilizables/FAQSection';

const Home = () => {

    return (
        <main>
            <Helmet>
                <title>Senestrari Dev - Desarrollo Web Full Stack en Córdoba</title>
                <meta name="description" content="Senestrari Dev ofrece soluciones de desarrollo web Full Stack en Córdoba. Con experiencia en tecnologías como JavaScript, React, Node.js, WordPress y GitHub. Descubre nuestros proyectos y servicios de alta calidad." />

                {/* OG Meta */}
                <meta property="og:title" content="Senestrari Dev - Soluciones de Desarrollo Web en Córdoba" />
                <meta property="og:description" content="Explora servicios de desarrollo web Full Stack, integrando tecnologías modernas para crear sitios web adaptables y funcionales." />
                <meta property="og:image" content="https://senestraridev.com/path/to/preview-image.jpg" />
                <meta property="og:url" content="https://senestraridev.com" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Senestrari Dev - Desarrollo Web Full Stack" />
                <meta name="twitter:description" content="Proyectos web innovadores en Córdoba con tecnologías de vanguardia como React, Node.js y WordPress." />
                <meta name="twitter:image" content="https://senestraridev.com/path/to/preview-image.jpg" />

                <link rel="canonical" href="https://senestraridev.com" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <SEOJsonLD />
            <HeroBienvenida />
            <AboutSection />
            <ExperienceSection />
            <ServicesSection />
            <TestimonialSection />
            <PortfolioBanner />
            <FAQSection />
        </main>
    )

}

export default Home;