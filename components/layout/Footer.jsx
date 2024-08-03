import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <p>© 2024 Endomedics Qro. Todos los derechos reservados.</p>
          </div>
          <div>
            <a href="/#inicio" className="text-gray-300 hover:text-white mr-4">Inicio</a>
            <a href="/#about" className="text-gray-300 hover:text-white mr-4">Acerca de</a>
            <a href="/contacto" className="text-gray-300 hover:text-white mr-4">Contacto</a>
            <a href="/productos" className="text-gray-300 hover:text-white">Servicios</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;