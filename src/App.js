import React from 'react';
import Header from './components/Header/Header';
import Inicio from './components/Sections/Inicio/Inicio';
import Celulares from './components/Sections/Celulares/Celulares';
import Accesorios from './components/Sections/Accesorios/Accesorios';
import Sonido from './components/Sections/Sonido/Sonido';
import Gamer from './components/Sections/Gamer/Gamer';
import Marcas from './components/Sections/Marcas/Marcas'
import Contacto from './components/Sections/Contacto/Contacto';
import FloatingWhatsAppButton from './components/FloatinWhatsappButton/FloatinWhatsappButton';

function App() {
  return (
    <div>
      <Header />
      <Inicio />
      <Celulares />
      <Accesorios />
      <Sonido />
      <Gamer />
      <Marcas />
      <Contacto />
      <FloatingWhatsAppButton />
    </div>
  );
}

export default App;
