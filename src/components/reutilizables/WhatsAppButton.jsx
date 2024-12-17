import React from 'react';
import '../styles/partialsStyles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/3513893394"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;

