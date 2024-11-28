import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#celulares">Celulares</a></li>
        <li><a href="#accesorios">Accesorios</a></li>
        <li><a href="#sonido">Sonido</a></li>
        <li><a href="#gamer">Zona Gamer</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <div className="icons">
        <i className="fas fa-search"></i>
        <i className="fas fa-user"></i>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </nav>
  );
};

export default Navigation;

