import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { idiomaContext } from "./contexto/IdiomaContexto"

const Cursos = ({curso,id,certificado,aprendizaje}) => {

    const { idioma } = useContext(idiomaContext)

    return (
        <div className="curso">
            <div id="nombreCurso">
                <h2 id={id}>{curso}</h2>
                <Link target="blank" to={`https://www.coderhouse.com/certificados/${certificado}?lang=${idioma}`}>
                    <p>{idioma === "es" ? "Ver certificado" : "Certificate"}</p>
                </Link>
            </div>
            <h3>
                {idioma === "es" ? `Que aprendí en el curso de ${curso} ?` : `What did I learn in the ${curso} Training? `}
            </h3>
            <p>
                {aprendizaje}
            </p>
        </div>
    )



}

export default Cursos