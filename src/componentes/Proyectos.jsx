import React, { useContext } from "react";
import CarrouselProyectos from "./CarrouselProyectos";
import { idiomaContext } from "./contexto/IdiomaContexto"

const Proyectos = () => {

    const { idioma } = useContext(idiomaContext)

    return (
        <section id="contenedorProyectos">
            <h3>{idioma === "es" ? "Algunos de mis proyectos" : "Some of my projects"}</h3>

            <h4>{idioma === "es" ? "Proyectos JavaScript" : "JavaScript projects"}</h4>

            <CarrouselProyectos idCarrousel={"carrouselClima"} titulo={idioma === "es" ? "Clima de distintas ciudades" : "Weather of different cities"} tituloDesc={idioma === "es" ? "Descripción" : "Description"} descripcion={idioma === "es" ? "Página responsiva, que muestra el clima junto con otra información relacionada con la ciudad que se busque." : "Responsive website that displays the weather, along with information related to the city of interest."} codigo={"https://github.com/RodrigoEzequielVazquez/WeatherAPI"} img={<div className="carousel-inner"><div className="carousel-item active">
                <img src="/img/proyectos/muestra-clima-bsas.png" className="d-block" alt="..." />
            </div>
                <div className="carousel-item">
                    <img src="/img/proyectos/muestra-clima-madrid.png" className="d-block" alt="..." />
                </div>
            </div>
            } />

            <CarrouselProyectos idCarrousel={"carrouselTodoList"} titulo={idioma === "es" ? "Lista de tareas a realizar" : "To-do list"} tituloDesc={idioma === "es" ? "Descripción" : "Description"} descripcion={idioma === "es" ? "Página responsiva que permite crear tablas de tareas a realizar." : "Responsive website, which allows you to create tables of tasks to be carried out."} codigo={"https://github.com/RodrigoEzequielVazquez/To-do-List"} img={<div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/img/proyectos/muestra-todo-list.png" className="d-block" alt="..." />
                </div>
            </div>
            } />

            <CarrouselProyectos idCarrousel={"carrouselTateti"} titulo={idioma === "es" ? "Juego del ta-te-ti" : "Tik-tac-toe game"} tituloDesc={idioma === "es" ? "Descripción" : "Description"} descripcion={idioma === "es" ? "Juego del ta-te-ti." : "Tik-tac-toe game."} codigo={"https://github.com/RodrigoEzequielVazquez/Ta-Te-Ti"} img={
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/img/proyectos/muestra-tateti-1.png" className="d-block" alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src="/img/proyectos/muestra-tateti-2.png" className="d-block" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/proyectos/muestra-tateti-3.png" className="d-block" alt="..." />
                    </div>
                </div>
            } />

            <h4>{idioma === "es" ? "Proyectos React.Js" : "React.Js projects"}</h4>

            <CarrouselProyectos idCarrousel={"carrouselPeliculas"} titulo={idioma === "es" ? "Plataforma de películas" : "Movie platform"} tituloDesc={idioma === "es" ? "Descripción" : "Description"} descripcion={idioma === "es" ? "Página web responsiva de películas que se obtienen de la API de TMDB. Cuenta con una gran cantidad de películas, y ofrece la información principal, junto con un video y un link externo para poder encontrar el mejor lugar para poder verlas." : "Responsive website about movies, which can be obtained from TMDB's API. It contains lots of movies, offering the main info of each of them, along with a video and an external link that helps you find the best place to watch them."} codigo={"https://github.com/RodrigoEzequielVazquez/streaming-zone"} img={<div className="carousel-inner"><div className="carousel-item active">
                <img src="/img/proyectos/muestra-info-peliculas.png" className="d-block" alt="..." />
            </div>
                <div className="carousel-item">
                    <img src="/img/proyectos/muestra-inicio-peliculas.png" className="d-block" alt="..." />
                </div>
            </div>
            } />

            <CarrouselProyectos idCarrousel={"carrouselKFC"} titulo={idioma === "es" ? "Simulador de pedidos en KFC" : "KFC order simulator"} tituloDesc={idioma === "es" ? "Descripción" : "Description"} descripcion={idioma === "es" ? "Página web responsiva, que recrea el sitio de KFC Argentina y que simula un pedido." : "Responsive website which recreates KFC Argentina's main site, and it simulates an order."} codigo={"https://github.com/RodrigoEzequielVazquez/proyecto-KFC"} img={<div className="carousel-inner"><div className="carousel-item active">
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

            <CarrouselProyectos idCarrousel={"carrouselCajitas"} titulo={idioma === "es" ? "Cajitas decoradas" : "Decorated boxes"} tituloDesc={idioma === "es" ? "Descripción" : "Description"} descripcion={idioma === "es" ? "Página responsiva de cajitas decoradas para un cliente." : "Responsive website about Home Decor items, for a client."} codigo={"https://github.com/RodrigoEzequielVazquez/"} img={<div className="carousel-inner"><div className="carousel-item active">
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