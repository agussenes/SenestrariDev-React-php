import HeroContact from "./contact/HeroContact";
import ServicesContact from "./contact/ServicesContact";
import PortfolioBanner from "../reutilizables/PortfolioBanner";
import TestimonialSection from "../reutilizables/TestimonialSection";
import ContactForm from "./contact/ContactForm";
import FAQSection from "../reutilizables/FAQSection";

const Contact = () => {


    return(
        <>
        <HeroContact/>
        <ServicesContact/>        
        <TestimonialSection/>
        <PortfolioBanner/>
        <ContactForm/>
        <FAQSection/>
        </>
    )

}

export default Contact;