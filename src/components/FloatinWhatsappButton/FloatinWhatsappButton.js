// src/components/FloatingWhatsAppButton.js
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatinWhatsappButton.css';

const FloatingWhatsAppButton = () => {
  const [showMessage, setShowMessage] = useState(true);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <>
      {/* Mensaje de contacto */}
      {showMessage && (
        <div className="whatsapp-message">
          <span className="toggle-button" onClick={toggleMessage}>-</span>
          Tienes alguna duda? <br></br> ¡Contáctate con nosotros!
        </div>
      )}

      {/* Botón flotante de WhatsApp */}
      <a 
        href="https://wa.me/573007547369" 
        className="whatsapp-float"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat con asesor por WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default FloatingWhatsAppButton;
