import React from "react";

const Habilidades = () => {
    return (
        <div id="contenedorHabilidades">
            <h3>Un paso por los lenguajes,framework y las tecnologias que manejo.</h3>
            
            <p>Lenguajes</p>
            <div className="contenedorImgs">
                <img src="/img/iconos/html.png" alt="" />
                <img src="/img/iconos/css.png" alt="" />
                <img src="/img/iconos/js.png" alt="" />
            </div>

            <p>Frameworks y librerias</p>
            <div className="contenedorImgs">
                <img src="/img/iconos/bootstrap.png" alt="" />
                <img src="/img/iconos/react.png" alt="" />
                <img src="/img/iconos/sass.png" alt="" />
            </div>

            <p>Otras tecnologias</p>
            <div className="contenedorImgs">
                <img src="/img/iconos/git.png" alt="" />
                <img src="/img/iconos/github.png" alt="" />
                <img src="/img/iconos/node.png" alt="" />
                <img src="/img/iconos/npm.png" alt="" />
            </div>

        </div>
    )
}

export default Habilidades