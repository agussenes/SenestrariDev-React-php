import { Helmet } from 'react-helmet-async';
import SEOJsonLD from '../partials/SEOJsonLD';

import HeroContact from "./contact/HeroContact";
import ServicesContact from "./contact/ServicesContact";
import PortfolioBanner from "../reutilizables/PortfolioBanner";
import TestimonialSection from "../reutilizables/TestimonialSection";
import ContactForm from "./contact/ContactForm";
import FAQSection from "../reutilizables/FAQSection";

const Contact = () => {


    return (
        <>
            <Helmet>
                <title>Contacto | Senestrari Dev - Hablemos de tu proyecto</title>
                <meta name="description" content="¿Tenés una idea en mente? Contactá a Senestrari Dev y llevemos tu proyecto web al siguiente nivel. Desarrollador Full Stack en Córdoba especializado en React, Node.js y WordPress." />

                {/* Open Graph */}
                <meta property="og:title" content="Contacto | Senestrari Dev" />
                <meta property="og:description" content="Contactá conmigo para transformar tu idea en una solución digital real." />
                <meta property="og:image" content="https://senestraridev.com/path/to/preview-image.jpg" />
                <meta property="og:url" content="https://senestraridev.com/contact" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contacto | Senestrari Dev" />
                <meta name="twitter:description" content="Llevá tu presencia online a otro nivel con Senestrari Dev." />
                <meta name="twitter:image" content="https://senestraridev.com/path/to/preview-image.jpg" />

                <link rel="canonical" href="https://senestraridev.com/contact" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <SEOJsonLD />
            <HeroContact />
            <ServicesContact />
            <TestimonialSection />
            <PortfolioBanner />
            <ContactForm />
            <FAQSection />
        </>
    )

}

export default Contact;