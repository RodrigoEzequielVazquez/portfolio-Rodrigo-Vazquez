import React from "react";

const ManejoIconos = ({ arrays, title }) => {

    let key = 1
    const generarEstrellas = (num) => {
        const etiquetas = [];
        for (let i = 0; i < num; i++) {
            key ++
            etiquetas.push(<img className="estrella" key={key} src="img/iconos/estrella.png" />);
        }
        return etiquetas;
    };

    return (
        <div className="contenedorImgs">
            <div className="contenedorTitulo">
                <p>{title}</p>
            </div>

            <div className="contenedorIconos">
                {arrays.map((imgs) =>
                    <div className="cardIconos"  >
                        <img key={imgs.title} src={"/img/iconos/" + imgs.title + ".png"} alt={imgs.title} title={imgs.title.toUpperCase()} />
                        <div className="contenedorEstrellas">

                            {generarEstrellas(imgs.estrellas)}

                        </div>
                    </div>
                )}

            </div>


        </div>
    )
}

export default ManejoIconos
