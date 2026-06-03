import perfil from '../assets/perfil.jpeg'

import '../Css/proyectos.css'

import { FaArrowRight } from "react-icons/fa";
import { GiTwirlyFlower } from "react-icons/gi";
import { MdFindInPage } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const proyectos = [

    {
        // proyecto 1 //
        imagen: perfil,
        titulo: "E-Commerce Web",
        descripcion: "Tienda online moderna con carrito de compras, filtros, pagos y dashboard de administracion.",

        btn1: "React",
        btn2: "Tailwind CSS",
        btn3: "TypeScript",        
    },

        // proyecto 2 //
    {
        imagen: perfil,
        titulo: "SaaS Dashboard & Analytics",
        descripcion: "Panel de control interactivo con gráficos en tiempo real, reportes descargables, gestión de usuarios y métricas avanzadas.",

        btn1: "React",
        btn2: "Tailwind CSS",
        btn3: "TypeScript", 
    },

    {
        // proyecto 3 //
        imagen: perfil,
        titulo: "Real Estate Marketplace",
        descripcion: "Plataforma inmobiliaria con mapas interactivos, sistema de reservas, chat en vivo entre usuarios y filtros dinámicos avanzados.",

        btn1: "React",
        btn2: "Tailwind CSS",
        btn3: "TypeScript",
    },

    {
        // proyecto 4 //
        imagen: perfil,
        titulo: "Project Management Tool",
        descripcion: "Clon de Trello/Asana con tableros Kanban arrastrables, asignación de tareas, comentarios en tiempo real y notificaciones.",

        btn1: "React",
        btn2: "Tailwind CSS",
        btn3: "TypeScript",
    },

    {
        // proyecto 3 //
        imagen: perfil,
        titulo: "Real Estate Marketplace",
        descripcion: "Plataforma inmobiliaria con mapas interactivos, sistema de reservas, chat en vivo entre usuarios y filtros dinámicos avanzados.",

        btn1: "React",
        btn2: "Tailwind CSS",
        btn3: "TypeScript",
    },

    {
        // proyecto 3 //
        imagen: perfil,
        titulo: "Real Estate Marketplace",
        descripcion: "Plataforma inmobiliaria con mapas interactivos, sistema de reservas, chat en vivo entre usuarios y filtros dinámicos avanzados.",

        btn1: "React",
        btn2: "Tailwind CSS",
        btn3: "TypeScript",
    },
    
]

function Proyectos() {
    return(
        
        <div>
            
            <div className='titulo-proyecto-container'>
                <h4 className='titulo-proyecto'>
                    <span className='icono-habilidades'><GiTwirlyFlower /></span>
                    Proyectos Destacados
                </h4>
                <button className='boton-proyecto'>
                    Ver Proyectos <FaArrowRight />
                </button>
            </div>

            <div className='proyectos-grid'>
                {proyectos.map((proyecto, index) => (
                <div className="proyecto-item" key={index}> 
                    <article className="proyectos-container">
                        <img 
                            className='img-proyectos' 
                            src={proyecto.imagen} 
                        />

                        <div>
                            <h6 className='proyecto'>{proyecto.titulo}</h6>
                            <p className='proyecto-descripcion'>{proyecto.descripcion}</p>
                        </div>

                        <div className='tech-container'>
                            <button className='btn-tech'>{proyecto.btn1}</button>
                            <button className='btn-tech'>{proyecto.btn2}</button>
                            <button className='btn-tech'>{proyecto.btn3}</button>
                        </div>

                        <div className='btn-code-container'>
                            <div>
                                <button className='btn-code'>Demo </button>
                                <span><MdFindInPage /></span>
                            </div>

                            <div>
                                <button className='btn-code'>Codigo</button>
                                <span><FaGithub /></span>
                            </div>
                        </div>
                    </article>
                </div>
                ))}
            </div>
            
        </div>

    )

}

export default Proyectos;