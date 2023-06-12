import React from "react";
import InfoPersonal from "./InfoPersonal";
import Proyectos from "./Proyectos";
import Habilidades from "./Habilidades";

const Inicio = () => {
    return (
        <div id="contenedorInicio">
            <InfoPersonal />
            <Habilidades/>
        </div>
    )
}

export default Inicio 