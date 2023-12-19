import React, { useContext, useEffect } from "react";
import { idiomaContext } from "./contexto/IdiomaContexto"
import ManejoIconos from "./ManejoIconos";

const Habilidades = () => {

    const lenguajes = [{ title: "html", estrellas: 4 }, { title: "css", estrellas: 4 }, { title: "js", estrellas: 4 }]

    const framYlib = [{ title: "bootstrap", estrellas: 3 }, { title: "react", estrellas: 3 }, { title: "sass", estrellas: 4 }, { title: "handlebars", estrellas: 4 }]

    const bases = [{ title: "mongo", estrellas: 3}]

    const tecnologias = [{ title: "git", estrellas: 4 }, { title: "github", estrellas: 4 }, { title: "node", estrellas: 0 }, { title: "npm", estrellas: 0 }, { title: "postman", estrellas: 3 }, { title: "jwt", estrellas: 3 }, { title: "nodemailer", estrellas: 2 }, { title: "stripe", estrellas: 2 }, { title: "twilio", estrellas: 2 }]

    const { idioma } = useContext(idiomaContext)



    return (
        <div id="contenedorHabilidades">
            <h3>{idioma === "es" ? "Un paso por los lenguajes, frameworks, bases de datos y las tecnologias que manejo." : "A step through the languages, frameworks, data bases and technologies that I use."}</h3>

            <ManejoIconos arrays={lenguajes} title={idioma === "es" ? "Lenguajes" : "Languages"} />
            <ManejoIconos arrays={framYlib} title={idioma === "es" ? "Frameworks y librerías" : "Frameworks and libraries"} />
            <ManejoIconos arrays={bases} title={idioma === "es" ? "Bases de datos" : "Data bases"} />
            <ManejoIconos arrays={tecnologias} title={idioma === "es" ? "Otras tecnologias" : "Another technologies"} /> 

        </div>
    )
}

export default Habilidades