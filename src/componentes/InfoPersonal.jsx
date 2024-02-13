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

           {idioma === "es" ? <h2>Soy Rodrigo Vazquez, <b>desarrollador Full-Stack</b>. </h2>: <h2>I am Rodrigo Vazquez, <b>full-stack developer</b>.</h2> } 

            {idioma === "es" ? <p>

                Hace casi un año y medio completé mis dos primeros cursos
                de desarrollo <b>Front-end</b>, donde aprendí <b>HTML5, CSS3, SASS, JS, Bootstrap</b> y a aplicar <b>diseños web responsive</b> , luego aprendí <b>React.JS</b>. Por otra parte, hace cuatro meses termine mis estudios como desarrollador <b>Back-end</b> aplicando JS. Recientemente también finalicé cursos de <b>Python</b> y <b>PHP</b> .
                <br /> Las experiencias de trabajo en otros rubros me llevaron a
                obtener habilidades que puedo aplicar también en el ámbito
                de la programación, como el trabajo en equipo y la
                comunicación efectiva.
                <br /> Mi objetivo actual es conseguir mi primer trabajo relacionado con la programación, mientras sigo aprendiendo nuevas tecnologías y mejorando mis conocimientos. 
                <br /> A continuación verán mis conocimientos de programación y las herramientas y tecnologías que utilizo.</p>
                :
                <p>Almost a year and a half ago I completed my first two <b>Front-end</b> development courses, where I learned <b>HTML5, CSS3, SASS, JS, Bootstrap</b> and how to apply <b>responsive web designs</b>, then I learned <b>React.JS</b>. Four months ago I finished my studies as a  <b>Back-end</b> developer applying JS. I also recently completed <b>Python</b> and <b>PHP</b> courses.
                <br />Work experiences in other areas led me to obtain skills that I can also apply in the field of programming, such as teamwork and effective communication.
                <br /> My current goal is to get my first job related to programming, while I continue learning new technologies and improving my knowledge. <br /> Below you will see my programming knowledge and the tools and technologies I use.</p>}

        </div>
    )
}

export default InfoPersonal