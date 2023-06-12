import React from "react";
import { Link } from "react-router-dom";

const Estudios = () => {
    return (
        <div id="contenedorEstudios">
            <div> <h1>Mis estudios en programacion</h1></div>
            <div><p>Todos mis estudios los realice en Coder-House, hasta ahora llevo 3 cursos finalizados con enfoque al desarrollo front-end, y actualmente me encuetro estudiando un curso back-end</p></div>

            <div>
              
                <img src="/img/certificados/desarrollo-web.png" alt="" />
                <Link target="blank" to={"https://www.coderhouse.com/pages/certificados/63ab0e3a64be22000e65711c"}>
                <img src="/img/certificados/javascript.png" alt="" />
                </Link>
                <img src="/img/certificados/react-js.png" alt="" />
            </div>
             

        </div>
    )
}

export default Estudios