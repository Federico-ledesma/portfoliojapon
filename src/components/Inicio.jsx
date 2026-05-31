
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import perfil from "../assets/perfil.jpeg"

import '../Css/inicio.css'

function Inicio() {
    return(
        <main>
            <div className='inicio-container'>
                <div className="inicio">
                    <span className='kanji'>ノクシウス !</span> <br></br>
                    <span className='nombre'>Federico</span>
                    <h1 className='titulo-inicio'>Desarrollador Frontend</h1>

                    <p className='subtitulo-inicio'>
                        Creo experiencias web modernas,rapidas y accesibles con codigo limpio y diseño intuitivo
                    </p>

                    <div className='boton-proyecto-container'>
                        <button className='boton-proyecto-inicio'>
                            Ver Proyectos <FaArrowRight /> 
                        </button>
                        <button className='boton-proyecto-inicio contactar'>
                            Contactar <MdOutlineMail />
                        </button>
                    </div>

                </div>

                <div className="foto-inicio-container">
                    <img className="foto-inicio" src={perfil}  />
                </div>            
            </div>

            

            <p>Sigueme en:</p>

            <div className='iconos-inicio-container'>
                <span className='iconos-inicio'><FaGithub /></span>
                <span className='iconos-inicio'><FaLinkedin /></span>
                <span className='iconos-inicio'><FaXTwitter /></span>
                <span className='iconos-inicio'><FaInstagram /></span>
            </div>

            
        </main>

    )
}

export default Inicio;