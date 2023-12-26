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
        else if (date >= 13 && date <= 19) {
            setSaludo("Buenas tardes, ")
        }
        else {
            setSaludo("Buenas noches, ")
        }
    }, [date])

    return (
        <div id="contenedorInfoPersonal">
            <h1> {idioma === "es" ? saludo + "bienvenidos a mi portfolio." : "Hello, welcome to my protfolio."}</h1>

            <img src="/img/foto-personal/foto-inicio.png" alt="" />

            <h2>{idioma === "es" ? "Soy Rodrigo Vazquez, desarrollador Full-Stack. " : "I am Rodrigo Vazquez, full-stack developer."} </h2>

            {idioma === "es" ? <p>

                Empecé a estudiar programación a principios de julio de 2022. El lenguaje que mejor manejo y sobre el que más aprendí es JavaScript, ya que fue mi primer lenguaje y lo utilicé tanto en front-end como en back-end. Además de mis conocimientos en HTML5 y CSS3.
                Actualmente, me encuentro estudiando Python con su framework Django y también PHP en conjunto con MySQL.
                <br /> Hablando particularmente sobre mí, me considero una persona detallista, y que trata de mejorar y aprender constantemente. <br /> Mi objetivo actual es conseguir mi primer trabajo relacionado con la programación, mientras sigo aprendiendo nuevas tecnologías y mejorando mis conocimientos. <br /> A continuación verán mis conocimientos de programación y las herramientas y tecnologías que utilizo.</p>
                :
                <p>I started studying programming at the beginning of July 2022.
                    The language that I use best and that I learned the most about is Javascript, since it was my first language and I used it both in the front-end and in the back-end. In addition to my knowledge in HTML5 and CSS3. <br />
                    I am currently studying Python with its Django framework and also PHP in conjunction with MySQL.
                    Speaking particularly about myself, I consider myself a detail-oriented person, who tries to constantly improve and learn. <br /> My current goal is to get my first job related to programming, while I continue learning new technologies and improving my knowledge. <br /> Below you will see my programming knowledge and the tools and technologies I use.</p>}

        </div>
    )
}

export default InfoPersonal