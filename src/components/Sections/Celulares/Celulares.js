import React, { useState } from 'react';
import './Celulares.css';
import iphone from '../../../assets/images/iphone.webp';
import galaxy from '../../../assets/images/samsung-s24.jpg';
import edge40 from '../../../assets/images/motorola-edge40.webp';
import note13 from '../../../assets/images/xiaomi-note13.jpg';
import spark30 from '../../../assets/images/tecno-Spark30.webp';

const Celulares = () => {
  // Datos de las imágenes y títulos
  const images = [
    { src: iphone, title: 'Iphone' },
    { src: galaxy, title: 'Samsung' },
    { src: edge40, title: 'Motorola' },
    { src: note13, title: 'Xiaomi' },
    { src: spark30, title: 'Tecno' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para avanzar a la siguiente imagen
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para retroceder a la imagen anterior
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="celulares" className="section">
      <h1>Celulares</h1>
      <p>Descubre los últimos modelos de smartphones disponibles.</p>

      {/* Carrusel */}
      <div className="carousel">
        <button className="carousel-button prev" onClick={prevImage}>⟨</button>
        <div className="carousel-content">
          <img src={images[currentIndex].src} alt={images[currentIndex].title} />
          <h2>{images[currentIndex].title}</h2>
        </div>
        <button className="carousel-button next" onClick={nextImage}>⟩</button>
      </div>
    </section>
  );
};

export default Celulares;
