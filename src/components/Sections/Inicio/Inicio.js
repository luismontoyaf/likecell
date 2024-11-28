import React from 'react';
import './Inicio.css';
import '../../../App.css';
import local from '../../../assets/images/local-prueba.jpg' 

const Inicio = () => {
  return (
    <section id="inicio" className="inicioSection">
      <h1 id='inicioTitulo'>Bienvenido a LikeCell</h1>
      <p id='descInicio'>Somos tu mejor opción en tecnología móvil y productos gamer. <br></br>
        Nos especializamos en la venta de celulares, accesorios para celulares, vidrios de protección, sonido,<br></br> cargadores y una selección de productos gamer. 
        Encuéntranos en el Centro Comercial Cerritos Mall, piso 2.<br></br>
        ¡Visítanos y descubre nuestras ofertas!</p>
        <img src={local} alt="Logo" className="local" />
    </section>
  );
};

export default Inicio;
