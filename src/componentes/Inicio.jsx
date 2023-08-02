import React from "react";
import InfoPersonal from "./InfoPersonal";
import Habilidades from "./Habilidades";
import Redes from "./Redes";

const Inicio = () => {
    return (
        <section id="contenedorInicio">
            <InfoPersonal />
           

           <Redes titulo={"h3"}/>


            <Habilidades/>
        </section>
    )
}

export default Inicio 