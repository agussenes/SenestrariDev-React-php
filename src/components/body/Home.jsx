import React from 'react';
import HeroBienvenida from "./home/HeroBienvenida";
import AboutSection from './home/AboutSection';
import ExperienceSection from './home/ExperienceSection';
import ServicesSection from './home/ServicesSection';
import TestimonialSection from '../reutilizables/TestimonialSection';
import PortfolioBanner from "../reutilizables/PortfolioBanner";

const Home = () => {

    return (
        <main>
            <HeroBienvenida />
            <AboutSection />
            <ExperienceSection />
            <ServicesSection />
            <TestimonialSection />
            <PortfolioBanner />
        </main>
    )

}

export default Home;