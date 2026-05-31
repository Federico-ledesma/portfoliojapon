import { GiTwirlyFlower } from "react-icons/gi";

import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import react from '../assets/react.svg'
import git from '../assets/git.svg'
import github from '../assets/github.svg'
import figma from '../assets/figma.svg'
import python from '../assets/python.svg'


import "../Css/habilidades.css"

const skills = [
    { icon: html, name: "HTML5", css: "HTML" },
    { icon: css, name: "CSS3", css: "CSS" },
    { icon: js, name: "JavaScript", css: "JS" },
    { icon: react, name: "React", css: "REACT" },
    { icon: git, name: "Git", css: "GIT" },
    { icon: github, name: "GitHub", css: "GITHUB" },
    { icon: figma, name: "Figma", css: "FIGMA" },
    { icon: python, name: "Python", css: "PYTHON" },
]




function Habilidades() {
    return(
        <div>
            <h3 className="titulo-habilidades">
                <span className='icono-habilidades'><GiTwirlyFlower /></span>
                Habilidades
            </h3>

            <div className="habilidades-container">
                {skills.map((skill, index) => (
                    <figure className="habilidades" key={index}>
                        <img 
                            className={`iconos-habilidades ${skill.css}`}
                            src={skill.icon} 
                            alt={skill.name}
                        />
                        <figcaption>{skill.name}</figcaption>
                    </figure>
                ))}
            </div>
        </div>
    )
}

export default Habilidades;