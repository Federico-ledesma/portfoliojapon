import { useState } from 'react';

import '../Css/navbar.css'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  // Solo debe haber un return y ninguna función interna llamada Navbar
  return (

    <div className='navbar'>

      <div className='logo-container'>
        <span className='logo'>黒宵</span>
      </div>
      
      <nav className='navbar-container'>


      {/* Botón de Hamburguesa */}
      <button 
        className={`hamburger hamburger--spin ${isActive ? 'is-active' : ''}`} 
        type="button"
        onClick={toggleMenu}
        aria-label="Menu"
        aria-controls="navigation"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      {/* Menú de navegación */}
      <div id="navigation" className={`menu ${isActive ? 'activo' : ''}`}>
        <ul className='links'> 

          <li>
            <a href='#inicio'>INICIO</a>
          </li>

          <li>
            <a href='#sobremi'>SOBRE MI</a>
          </li>

          <li>
            <a href='#habilidades'>HABILIDADES</a>
          </li>

          <li>
            <a href='#proyectos'>PROYECTOS</a>
          </li>

          <li>
            <a href='#experiencia'>EXPERIENCIA</a>
          </li>

          <li>
            <a href='#educacion'>EDUCACION</a>
          </li>

          <li>
            <a href='#contacto'>CONTACTO</a>
          </li>

        </ul>
      </div>
    </nav>
    </div>
    
  );
};

export default Navbar;

