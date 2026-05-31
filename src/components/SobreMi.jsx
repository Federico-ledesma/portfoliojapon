import perfil from '../assets/perfil.jpeg'


import { FaUser } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaArrowsUpToLine } from "react-icons/fa6";
import { GiTwirlyFlower } from "react-icons/gi";

import '../Css/sobre-mi.css'

function SobreMi() {
    return(
        <div className='sobre-container'>
            <img className='foto-perfil' src={perfil} />
        
            
            <h2 className='titulo-sobremi'>
                <span className='icono-sobremi'><GiTwirlyFlower /></span>
                Sobre Mi
            </h2>
            
            <p className='texto-sobremi'>
                Soy un desarrollador frontend con enfoque en construir interfaces modernas, intuitivas y responsivas. Me apasiona aprender nuevas tecnologias y llevar las ideas al navegador con codigo limpio y eficiente.
            </p>

            <div className='contenedor'>
                <div className='caract-container'>
                <FaUser className='icono-caract'/>
                <p className='titulo-caract'>ENFOQUE EN EL USUARIO</p> 
                <p className='subtitulo-caract'>Diseño pensando en la experiencia</p>
            </div>

            <div className='caract-container'>
                <FaCode className='icono-caract'/>
                <p className='titulo-caract'>CODIGO LIMPIO</p> 
                <p className='subtitulo-caract'>Estructura, escalable y mantenible</p>
            </div>

            <div className='caract-container'>
                <FaArrowsUpToLine className='icono-caract'/>
                <p className='titulo-caract'>APRENDIZAJE CONSTANTE</p> 
                <p className='subtitulo-caract'>Siempre explorando nuevas tecnologias</p>
            </div>
            </div>
            

             
        </div>
    )
}

export default SobreMi;