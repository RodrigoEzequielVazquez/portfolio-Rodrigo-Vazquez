import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { idiomaContext } from "./contexto/IdiomaContexto"

const Cursos = ({ curso, id, certificado, aprendizaje }) => {

    const { idioma } = useContext(idiomaContext)

    return (
        <div className="curso">
            <div id="nombreCurso">
                <h2 id={id}>{curso} </h2>
                {
                    id === "phpmysql" ?
                    
                        <Link target="blank" to={`https://sigead.utnba.centrodeelearning.com/alumnos/validar_certificado`}>
                            <p>{idioma === "es" ? "Validar Certificado " : "Validate certificate "}</p>
                        </Link>
                        :

                        (certificado === "" ? <p>Esperando certificado</p> :
                        <Link target="blank" to={`https://www.coderhouse.com/certificados/${certificado}?lang=${idioma}`}>
                            <p>{idioma === "es" ? "Ver certificado " : "Certificate "}</p>
                        </Link>)
                }

                {id === "phpmysql" ? <p id="cuv">CUV = <b>CER-ZOQFWZAL-1150908</b></p> : "" }

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