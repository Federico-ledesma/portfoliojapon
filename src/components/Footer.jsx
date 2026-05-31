import { FaGithub } from "react-icons/fa";

import '../Css/footer.css'

function Footer() {
    return(
        <footer className="footer">

            <h3 className="footer-logo">Noxius | Dev</h3>

            <div className="footer-redes">
                <a href="#" target="_blank">
                    <FaGithub />
                </a>
            </div>

            <p className="footer-copy">
                © 2026 NoxiusDev — Todos los derechos reservados
            </p>

        </footer>
    )
}

export default Footer;