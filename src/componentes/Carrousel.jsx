import React from "react";
import { Link } from "react-router-dom";

const Carrousel = ({ img, idCarrousel, titulo, tituloDesc, descripcion, codigo }) => {
    return (
        <div className="proyectos">
            <h4>{titulo}</h4>
            <div className="contenedorCarrousel">
                <div id={idCarrousel} className="carousel slide">
                    {img}
                    <button className="carousel-control-prev" type="button" data-bs-target={"#" + idCarrousel} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={"#" + idCarrousel} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="descripcion">
                <p>{tituloDesc} </p>
                <p>{descripcion}</p>
            </div>

            <div className="iconos">
                <Link to={codigo} target="blank">
                    <img src="/img/iconos/codigo.png" alt="" /> <img src="/img/iconos/github.png" alt="" />
                </Link>
            </div>
        </div>

    )
}

export default Carrousel