import React, { useContext } from "react";
import { idiomaContext } from "./contexto/IdiomaContexto"
import ManejoIconos from "./ManejoIconos";

const Habilidades = () => {

    const lenguajes = [{ title: "HTML" }, { title: "CSS" }, { title: "SASS" }, { title: "Javascript" }, { title: "PHP" }, { title: "Python" }]

    const framYlib = [{ title: "Bootstrap" }, { title: "ReactJS" },{ title: "Django" }]

    const bases = [{ title: "MongoDB" }, { title: "MySQL" }]

    const tecnologias = [{ title: "Git" }, { title: "GitHub" }, { title: "Node" }, { title: "NPM" }, { title: "Postman" }, { title: "JWT" }, { title: "Handlebars" }]

    const { idioma } = useContext(idiomaContext)



    return (
        <div id="contenedorHabilidades">
            <h3>{idioma === "es" ? "Un paso por los lenguajes, frameworks, bases de datos y las tecnologías que manejo." : "A step through the languages, frameworks, data bases and technologies that I use."}</h3>

            <ManejoIconos arrays={lenguajes} title={idioma === "es" ? "Lenguajes" : "Languages"} />
            <ManejoIconos arrays={framYlib} title={idioma === "es" ? "Frameworks y librerías" : "Frameworks and libraries"} />
            <ManejoIconos arrays={bases} title={idioma === "es" ? "Bases de datos" : "Data bases"} />
            <ManejoIconos arrays={tecnologias} title={idioma === "es" ? "Otras tecnologías" : "Another technologies"} />

        </div>
    )
}

export default Habilidades