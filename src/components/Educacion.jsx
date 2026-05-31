import santander from '../cursos/santander.png'
import digitalbluee from '../cursos/digitalbluee.png'
import htmldalto from '../cursos/html-css-dalto.jpg'
import jsmoure from '../cursos/js-moure.jpg'
import pythondalto from '../cursos/python-dalto.jpg'
import pythonmoure from '../cursos/python-moure.jpg'
import git from '../cursos/git.jpg'
import '../Css/educacion.css'

const listaEducacion = [
    {
        diploma: santander, // USAMOS la variable importada
        carrera: "CURSO PYTHON",
        lugar: "Santander Open Academy",
        periodo: "2023-2024",
    },
    {
        diploma: digitalbluee, 
        carrera: "FRONTEND REACT",
        lugar: "Digital Bluee",
        periodo: "2024-2025",
    },

    {
        diploma: htmldalto, 
        carrera: "CURSO HTML Y CSS",
        lugar: "Youtube.com/SoyDalto",
        periodo: "2022-2022",
    },

    {
        diploma: jsmoure, 
        carrera: "CURSO JavaScript",
        lugar: "Youtube.com/MoureDev",
        periodo: "2023-2024",
    },

    {
        diploma: pythondalto, 
        carrera: "CURSO PYTHON",
        lugar: "Youtube.com/SoyDalto",
        periodo: "2023-2024",
    },

    {
        diploma: pythonmoure, 
        carrera: "CURSO PYTHON 2",
        lugar: "Youtube.com/MoureDev",
        periodo: "2023-2024",
    },

    {
        diploma: git, 
        carrera: "CURSO GIT Y GITHUB",
        lugar: "Youtube.com/MoureDev",
        periodo: "2023-2024",
    },
    
]

function Educacion() {
    return (
        <section>
            <h2 className='titulo-educacion'>Educación</h2>

            {/* Usamos .map para recorrer la lista y no repetir código */}
            <div className='educacion-grid'>
                {listaEducacion.map((item, index) => (
                <div className='educacion-container' key={index}>
                    <img 
                        className='img-carrera' 
                        src={item.diploma} 
                        alt={item.lugar} 
                    />
                    <ol className='carrera-container'>
                        
                        <li className='titulo-carrera'>
                            {item.carrera}
                        </li>

                        <li className='titulo-lugar'>
                            {item.lugar} 
                        </li>

                        <li className='titulo-periodo'>
                            <time>{item.periodo}</time>
                        </li>

                    </ol>
                </div>
            ))}
            </div>
            
        </section>
    )
}

export default Educacion;