import React from "react";
import Carrousel from "./Carrousel";

const Proyectos = () => {
    return (
        <div id="contendorProyectos">
            <h3>Mis proyectos</h3>
            <Carrousel idCarrousel={"carrouselPeliculas"} titulo={"Plataforma de peliculas"} descripcion={" Pagina web de peliculas que se obtienen de la api de TMDB.Cuenta con una gran cantidad de peliculas, y ofrece la informacion principal, junto con un video y un link externo para poder encontrar el mejor lugar para poder verlas."} img={<div className="carousel-inner"><div className="carousel-item active">
                <img src="/img/proyectos/muestra-info-peliculas.png" className="d-block" alt="..." />
            </div>
                <div className="carousel-item active">
                    <img src="/img/proyectos/muestra-inicio-peliculas.png" className="d-block" alt="..." />
                </div>
            </div>
            } />

            <Carrousel idCarrousel={"carrouselKFC"} titulo={"Simulador de pedidos en KFC"} descripcion={"Pagina web que recrea el sitio de KFC Argentina y que SIMULA un pedido."} img={<div className="carousel-inner"><div className="carousel-item active">
                <img src="/img/proyectos/muestra-inicio-KFC.png" className="d-block" alt="..." />
            </div>
                <div className="carousel-item active">
                    <img src="/img/proyectos/muestra-menues-KFC.png" className="d-block" alt="..." />
                </div>
                <div className="carousel-item active">
                    <img src="/img/proyectos/muestra-bucket-KFC.png" className="d-block" alt="..." />
                </div>
                <div className="carousel-item active">
                    <img src="/img/proyectos/muestra-pago-KFC.png" className="d-block" alt="..." />
                </div>
            </div>
            } />

            <Carrousel idCarrousel={"carrouselClima"} titulo={"Clima de distintas ciudades"} descripcion={"Pagina que muestra el clima junto con otra informacion relacionada a la ciudad que se busque."} img={<div className="carousel-inner"><div className="carousel-item active">
                <img src="/img/proyectos/muestra-clima-bsas.png" className="d-block" alt="..." />
            </div>
                <div className="carousel-item active">
                    <img src="/img/proyectos/muestra-clima-madrid.png" className="d-block" alt="..." />
                </div>
            </div>
            } />

        </div>
    )
}

export default Proyectos