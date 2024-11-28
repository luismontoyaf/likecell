import React from 'react';
import './Gamer.css';
import carcasa from '../../../assets/images/teclado-gamer.jpeg';
import templado from '../../../assets/images/diadema-gamer.webp';
import cargador from '../../../assets/images/mouse-gamer.jpg'


const Gamer = () => {
  return (
    <section id="gamer" className="gamerSection">
      <h1>Zona Gamer</h1>
      <p>Encuentra accesorios gamer.</p>

      {/* Contenedor para las tres columnas */}
      <div className="accesorios-columns">
        {/* Columna 1 */}
        <div className="accesorio-column">
          <h2>Teclados</h2>
          <img src={carcasa} alt="Carcasas" />
        </div>

        {/* Columna 2 */}
        <div className="accesorio-column">
          <h2>Diademas</h2>
          <img src={templado} alt="Audífonos" />
        </div>

        {/* Columna 3 */}
        <div className="accesorio-column">
          <h2>Mouse</h2>
          <img src={cargador} alt="Cargadores" />
        </div>
      </div>
    </section>
  );
};

export default Gamer;