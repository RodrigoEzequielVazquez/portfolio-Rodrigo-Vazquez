import React, {useContext} from "react";
import { idiomaContext } from "./contexto/IdiomaContexto"

const Habilidades = () => {
    
    const { idioma } = useContext(idiomaContext)

    return (
        <div id="contenedorHabilidades">
            <h3>{idioma === "es" ? "Un paso por los lenguajes, frameworks y las tecnologias que manejo.": "A step through the languages, frameworks and technologies that I use."}</h3>

            <p>{idioma === "es" ? "Lenguajes": "Languages"}</p>
            <div className="contenedorImgs">
                <img src="/img/iconos/html.png" alt={idioma === "es" ? "icono HTML" : "HTML icon"} title="HTML5" />
                <img src="/img/iconos/css.png" alt={idioma === "es" ? "icono css" : "css icon"} title="CSS3"/>
                <img src="/img/iconos/js.png" alt={idioma === "es" ? "icono Javascript" : "Javascript icon"} title="Javascript" />
            </div>

            <p>{idioma === "es" ? "Frameworks y librerías": "Frameworks and libraries"}</p>
            <div className="contenedorImgs">
                <img src="/img/iconos/bootstrap.png" alt={idioma === "es" ? "icono bootstrap" : "bootstrap icon"} title="Bootstrap" />
                <img src="/img/iconos/react.png" alt={idioma === "es" ? "icono react" : "react icon"} title="React"/>
                <img src="/img/iconos/sass.png" alt={idioma === "es" ? "icono sass" : "sass icon"} title="Sass" />
            </div>

            <p>{idioma === "es" ? "Otras tecnologias": "Another technologies"}</p>
            <div className="contenedorImgs">
                <img src="/img/iconos/git.png" alt={idioma === "es" ? "icono git" : "git icon"} title="Git" />
                <img src="/img/iconos/github.png" alt={idioma === "es" ? "icono github" : "github icon"} title="Git-hub" />
                <img src="/img/iconos/node.png" alt={idioma === "es" ? "icono node" : "node icon"} title="Node" />
                <img src="/img/iconos/npm.png" alt={idioma === "es" ? "icono npm" : "npm icon"} title="NPM"/>
            </div>

        </div>
    )
}

export default Habilidades