import React from 'react';
import './Contacto.css';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const Contacto = () => {
  return (
      <section id="contacto">

          <h1>Contacto</h1>
          <p>¡Contamos con domicilio a todo el pais!</p>
          <div className="container">

              {/* Columna de Información de Contacto */}
              <div className="contact-info">
                  <p><strong>Dirección:</strong> <br></br>Centro Comercial Cerritos Mall, Piso 2, Burbuja 18</p>
                  <p><strong>Teléfono:</strong> <br></br>+57 300 754 7369</p>
                  <p><strong>Horario de Atención:</strong> <br></br>Lunes a Domingo, 11:00 AM - 7:30 PM</p>
              </div>

              {/* Columna de Mapa de Google Maps */}
              <div className="map">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15902.98983838404!2d-75.8003644!3d4.8133686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e387d2a5ff96df3%3A0xaae1f9e4f127ca26!2sCerritos%20Mall!5e0!3m2!1ses-419!2sco!4v1730136860197!5m2!1ses-419!2sco"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy">
                  </iframe>
              </div>
          </div>
          {/* Panel de Redes Sociales */}
          <div className="social-panel">
          <h3>Síguenos</h3>
            <div className="social-icons">
                <a href="https://facebook.com/tu_pagina" target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare />
                </a>
                <a href="https://www.instagram.com/likecell.oficial/?locale=dehttps%3A555ten.com%2F%3Fgclid%3DCjwKCAiA85efBhBbEiwAD7oLQD0Yv4VqRr-r7JZQO0urJZYdRtRM6QkTusDKWfLnFFK5MAIkhLUd3BoCBiYQAvD_BwE%3Flocale%3Ddehttps%3A%2F%2F555ten.com%2F%3Fgclid%3DCjwKCAiA85efBhBbEiwAD7oLQD0Yv4VqRr-r7JZQO0urJZYdRtRM6QkTusDKWfLnFFK5MAIkhLUd3BoCBiYQAvD_BwE%3Flocale%3Ddehttps%3A%2F555ten.com%2F%3Fgclid%3DCjwKCAiA85efBhBbEiwAD7oLQD0Yv4VqRr-r7JZQO0urJZYdRtRM6QkTusDKWfLnFFK5MAIkhLUd3BoCBiYQAvD_BwE%3Flocale%3Ddehttps%3A%2F%2F555ten.com%2F%3Fgclid%3DCjwKCAiA85efBhBbEiwAD7oLQD0Yv4VqRr-r7JZQO0urJZYdRtRM6QkTusDKWfLnFFK5MAIkhLUd3BoCBiYQAvD_BwEhttps%3A%2F%2F555ten.com%2F&hl=am-et" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
          </div>
      </section>
  );
};

export default Contacto;
