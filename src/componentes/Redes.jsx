import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { idiomaContext } from "./contexto/IdiomaContexto"

const Redes = ({titulo}) => {

    const { idioma } = useContext(idiomaContext)

    return (
        <div id="contacto">

           {titulo === "h3" ? <h3>{idioma === "es" ? "Mis redes de contacto" : "My contact"}</h3> : <p>{idioma === "es" ? "Mis redes de contacto" : "My contact"}</p> }
            
            <div id="redes">

                <Link to="https://www.linkedin.com/in/rodrigo-vazquez/" target="blank">
                    <img id="linkedin" src="/img/iconos/linkedin.png" alt={idioma === "es" ? "icono Linkedin" : "Linkedin icon"} title="Linkedin" />
                </Link>

                <Link to="https://github.com/RodrigoEzequielVazquez" target="blank">
                    <img id="gitHub" src="/img/iconos/github.png" alt={idioma === "es" ? "icono GitHub" : "GitHub icon"} title="GitHub" />
                </Link>

                <Link to="mailto:rodrigo_vazquez_99@hotmail.com ">
                    <img id="outlook" src="/img/iconos/outlook.png" alt={idioma === "es" ? "icono Outlook" : "Outlook icon"} title="Outlook" />
                </Link>

            </div>
        </div>

    )
}
export default Redes