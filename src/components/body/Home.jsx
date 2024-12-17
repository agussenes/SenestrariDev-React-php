import React from 'react';
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