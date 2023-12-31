import React, { useContext } from "react";
import Carrousel from "./Carrousel";
import { idiomaContext } from "./contexto/IdiomaContexto"

const Proyectos = () => {

    const { idioma } = useContext(idiomaContext)

    return (
        <section id="contenedorProyectos">
            <h3>{idioma === "es" ? "Algunos de mis proyectos" : "Some of my projects"}</h3>
            <Carrousel idCarrousel={"carrouselPeliculas"} titulo={idioma === "es" ? "Plataforma de peliculas": "Movie platform"} tituloDesc={idioma === "es" ? "Descripcion" : "Description"} descripcion={idioma === "es" ? "Pagina web responsive, de peliculas que se obtienen de la api de TMDB. Cuenta con una gran cantidad de peliculas, y ofrece la informacion principal, junto con un video y un link externo para poder encontrar el mejor lugar para poder verlas." : "Responsive website about movies, which can be obtained from TMDB's API. It contains lots of movies, offering the main info of each of them, along with a video and an external link that helps you find the best place to watch them."} codigo={"https://github.com/RodrigoEzequielVazquez/streaming-zone"} img={<div className="carousel-inner"><div className="carousel-item active">
                <img src="/img/proyectos/muestra-info-peliculas.png" className="d-block" alt="..." />
            </div>
                <div className="carousel-item">
                    <img src="/img/proyectos/muestra-inicio-peliculas.png" className="d-block" alt="..." />
                </div>
            </div>
            } />

            <Carrousel idCarrousel={"carrouselKFC"} titulo={idioma === "es" ? "Simulador de pedidos en KFC": "KFC order simulator"} tituloDesc={idioma === "es" ? "Descripcion" : "Description"} descripcion={idioma === "es" ? "Pagina web responsive, que recrea el sitio de KFC Argentina y que SIMULA un pedido.":"Responsive website which recreates KFC Argentina's main site, and it SIMULATES an order."} codigo={"https://github.com/RodrigoEzequielVazquez/proyecto-KFC"} img={<div className="carousel-inner"><div className="carousel-item active">
                <img src="/img/proyectos/muestra-inicio-KFC.png" className="d-block" alt="..." />
            </div>
                <div className="carousel-item active">
                    <img src="/img/proyectos/muestra-menues-KFC.png" className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="/img/proyectos/muestra-bucket-KFC.png" className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="/img/proyectos/muestra-pago-KFC.png" className="d-block" alt="..." />
                </div>
            </div>
            } />

            <Carrousel idCarrousel={"carrouselClima"} titulo={idioma === "es" ? "Clima de distintas ciudades" : "Weather of different cities"} tituloDesc={idioma === "es" ? "Descripcion" : "Description"} descripcion={idioma === "es" ? "Pagina responsive, que muestra el clima junto con otra informacion relacionada a la ciudad que se busque.": "Responsive website that displays the weather, along with information related to the city of interest."} codigo={"https://github.com/RodrigoEzequielVazquez/WeatherAPI"} img={<div className="carousel-inner"><div className="carousel-item active">
                <img src="/img/proyectos/muestra-clima-bsas.png" className="d-block" alt="..." />
            </div>
                <div className="carousel-item">
                    <img src="/img/proyectos/muestra-clima-madrid.png" className="d-block" alt="..." />
                </div>
            </div>
            } />

            <Carrousel idCarrousel={"carrouselCajitas"} titulo={idioma === "es" ? "Cajitas decoradas" : "Decorated boxes" } tituloDesc={idioma === "es" ? "Descripcion" : "Description"} descripcion={idioma === "es" ? "Pagina responsive, de cajitas decoradas para un cliente.": "Responsive website about Home Decor items, for a client."} codigo={"https://github.com/RodrigoEzequielVazquez/"} img={<div className="carousel-inner"><div className="carousel-item active">
                <img src="/img/proyectos/muestra-inicio-cajitas.png" className="d-block" alt="..." />
            </div>
                <div className="carousel-item">
                    <img src="/img/proyectos/muestra-cajitas.png" className="d-block" alt="..." />
                </div>
            </div>
            } />

        </section>
    )
}

export default Proyectos