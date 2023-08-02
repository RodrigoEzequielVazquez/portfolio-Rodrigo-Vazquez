import React, { useEffect, useState, useContext } from "react";
import { idiomaContext } from "./contexto/IdiomaContexto"

const InfoPersonal = () => {

    const [saludo, setSaludo] = useState()

    const date = new Date().getHours()

    const { idioma } = useContext(idiomaContext)

    useEffect(() => {

        if (date >= 5 && date <= 12) {
            setSaludo("Buenos dias, ")
        }
        if (date >= 13 && date <= 19) {
            setSaludo("Buenas tardes, ")
        }
        else {
            setSaludo("Buenas noches, ")
        }
    }, [date])

    return (
        <div id="contenedorInfoPersonal">
            <h1> {idioma === "es" ? saludo + "bienvenidos a mi portfolio" : "Hello, welcome to my protfolio"}</h1>

            <img src="/img/foto-personal/foto-inicio.jpeg" alt="" />

            <h2>{idioma === "es" ? "Soy Rodrigo Vazquez, desarrollador Front-End " : "I am Rodrigo Vazquez, front-end developer"} </h2>

            {idioma === "es" ? <p>
                Hablando un poco sobre mi. Empece a estudiar programacion a principios de Julio de 2022. Actualmente soy desarrollador front-end, pero me encuentro estudiando un curso de desarrollo back-end, para poder tener un perfil de desarrollador full-stack. <br /> Hablando particularmente sobre mi, me considero una persona detallista, y que trata de mejorar y aprender constantemente. <br /> Mis objetivos actualmente son poder terminar el curso actual y encontrar mi primer trabajo como programador. <br /> A continuación veran mis conocimientos de programación, las herramientas y tecnologias que utilizo.</p> : <p>To tell you a little about myself, I started studyng programming beginning July 2022. Currently, I am a front end-developer, and I´m studyng back-end development in order to get a full stack profile, in the near future.
                    Focusing on how I am, I consider myself to be a proactive and meticulous person.
                    My current goals are to finish my back-end studies and find my first job as developer.
                    Here you´ll be able to catch a glimpse of some of my projects and working tools.</p>}

        </div>
    )
}

export default InfoPersonal