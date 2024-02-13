import React from "react";

const ManejoIconos = ({ title, arrays }) => {

    return (
        <div className="contenedorImgs">
            <div className="contenedorTitulo">
                <p>{title}</p>
            </div>

            <div className="contenedorIconos">
                {arrays.map((imgs) =>
                    <div className="cardIconos"  >
                        <img key={imgs.title} id={imgs.title.toLowerCase()} src={"/img/iconos/" + imgs.title + ".png"} alt={imgs.title} title={imgs.title.toUpperCase()} />
                        <p>{imgs.title}</p>
                      
                    </div>
                )}

            </div>


        </div>
    )
}

export default ManejoIconos
