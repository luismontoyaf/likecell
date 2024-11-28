import React from 'react';
import './Sonido.css';
import airpods from '../../../assets/images/airpods01.jpg'; // Asegúrate de cambiar la ruta a tus imágenes
import diadema from '../../../assets/images/diademas.webp';
import auriculares from '../../../assets/images/auriculares.webp';
import parlante from '../../../assets/images/parlante.jpg';

const Sonido = () => {
  return (
    <section id="sonido" className="sonidoSection">
      <h1>Sonido</h1>
      <p>Descubre audífonos y parlantes para el mejor sonido.</p>

      {/* Paneles de productos */}
      <div className="panel-container">
        <div className="panel">
          <h2>Audífonos Inalámbricos</h2>
          <img src={airpods} alt="Audífonos Inalámbricos" className="panel-image" />
        </div>
        <div className="panel">
          <h2>Diademas</h2>
          <img src={diadema} alt="Diademas" className="panel-image" />
        </div>
        <div className="panel">
          <h2>Parlantes</h2>
          <img src={parlante} alt="Parlantes" className="panel-image" />
        </div>
      </div>
    </section>
  );
};

export default Sonido;
