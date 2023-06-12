import React, { useEffect, useState } from "react";

const InfoPersonal = () => {

    const [saludo, setSaludo] = useState()

    const date = new Date().getHours()

    useEffect(() => {

        if (date >= 5 && date <= 12) {
            setSaludo("Buenos dias,")
        }
        if (date >= 13 && date <= 19) {
            setSaludo("Buenas tardes,")
        }
        else {
            setSaludo("Buenas noches,")
        }
    },[date])

    return (
        <div id="contendorInfoPersonal">
            <h1>{saludo ? saludo : "Hola,"} soy Rodrigo Vazquez y este es mi portfolio.</h1>
            <h2>Sobre mi</h2>
            <p>Empece a estudiar programacion a principios de Julio de 2022.
                Actualmente soy desarrolador front-end, pero me encuentro estudiando un curso de desarrollo back-end, para poder tener un perfil de desarrollador full-stack.
               <br/> Hablando particularmente sobre mi, me considero una persona detallista, y que trata de mejorar y aprender constantemente, sobre todo en cuanto a la programacion.
             <br /> Mis objetivos actualmente, son poder terminar el curso actual y encontrar mi primer trabajo de programador.
             <br /> A continuacion veran mis proyectos y mis conocimientos, saludos!
            </p>
        </div>
    )
}

export default InfoPersonal