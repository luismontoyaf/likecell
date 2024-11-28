import React from 'react';
import './Marcas.css';

// Importar las imágenes para las marcas
import marca1 from '../../../assets/images/apple.jpeg'; // Asegúrate de que las rutas sean correctas
import marca2 from '../../../assets/images/samsung.jpg';
import marca3 from '../../../assets/images/Xiaomi.png';
import marca4 from '../../../assets/images/motorola.png';
import marca5 from '../../../assets/images/tecno.jpg';
import marca6 from '../../../assets/images/huawei.jpg';

const Marcas = () => {
    const marcas = [
      { src: marca1, alt: 'Marca 1' },
      { src: marca2, alt: 'Marca 2' },
      { src: marca3, alt: 'Marca 3' },
      { src: marca4, alt: 'Marca 4' },
      { src: marca5, alt: 'Marca 5' },
      { src: marca6, alt: 'Marca 6' },
    ];
  
    return (
      <section id="marcas" className="section">
        <h1>Marcas</h1>
        <p>Contamos con productos y accesorios para las siguientes marcas, ¡Entre otras!</p>
        <div className="card-container">
          {marcas.map((marca, index) => (
            <div className="card" key={index}>
              <img src={marca.src} alt={marca.alt} className="card-image" />
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Marcas;
