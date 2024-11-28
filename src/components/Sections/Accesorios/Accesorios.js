import React from 'react';
import './Accesorios.css';
import carcasa from '../../../assets/images/case-celulares.jpg';
import templado from '../../../assets/images/vidrio-templado.webp';
import cargador from '../../../assets/images/cargador.webp'


const Accesorios = () => {
  return (
    <section id="accesorios" className="accesoriosSection">
      <h1 className='accesoriosTitulo'>Accesorios</h1>
      <p className='accesoriosDesc'>Encuentra accesorios para todos los dispositivos.</p>

      {/* Contenedor para las tres columnas */}
      <div className="accesorios-columns">
        {/* Columna 1 */}
        <div className="accesorio-column">
          <h2>Case</h2>
          <img src={carcasa} alt="Carcasas" />
        </div>

        {/* Columna 2 */}
        <div className="accesorio-column">
          <h2>Vidrios Templados</h2>
          <img src={templado} alt="Audífonos" />
        </div>

        {/* Columna 3 */}
        <div className="accesorio-column">
          <h2>Cargadores</h2>
          <img src={cargador} alt="Cargadores" />
        </div>
      </div>
    </section>
  );
};

export default Accesorios;

