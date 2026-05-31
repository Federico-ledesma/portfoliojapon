import { MdOutlineMail } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { MdTimer } from "react-icons/md";

import { FaArrowRight } from "react-icons/fa";

import '../Css/contacto.css'

function Contacto() {
    return(

        <div className="contacto">
            <h6 className="titulo-contacto">Contacto</h6>

            <div className="contacto-card">
                <MdOutlineMail className="icono" />
                <p>
                    <span>Email</span>
                    federicoledesma968@gmail.com
                </p>
            </div>

            <div className="contacto-card">
                <BiWorld className="icono" />
                <p>
                    <span>Ubicación</span>
                    Buenos Aires, Argentina
                </p>
            </div>

            <div className="contacto-card">
                <MdTimer className="icono" />
                <p>
                    <span>Disponibilidad</span>
                    Full Time / Freelance
                </p>
            </div>

            <button className="btn-contacto">
                Enviar mensaje <FaArrowRight />
            </button>
        </div>
    )
}

export default Contacto;