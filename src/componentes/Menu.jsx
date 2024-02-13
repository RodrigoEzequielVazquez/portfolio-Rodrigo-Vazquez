import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import {idiomaContext} from "./contexto/IdiomaContexto"

const Menu = () => {

    const {idioma,cambiarIdioma} = useContext(idiomaContext)
    console.log(idioma);

    return (
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>Menu</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ">
                            <li className="nav-item">
                                <NavLink className={`nav-link ${({ isActive }) => isActive ? "active" : ""}`} aria-current="page" to={"/"}>{idioma === "es" ? "Inicio" : "Home" }</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${({ isActive }) => isActive ? "active" : ""}`} aria-current="page" to={"/certificaciones"}>{idioma === "es" ? "Estudios" : "Studies" }</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${({ isActive }) => isActive ? "active" : ""}`} aria-current="page" to={"/proyectos"}>{idioma === "es" ? "Proyectos" : "Projects" }</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${({ isActive }) => isActive ? "active" : ""}`} aria-current="page" target="_blank" to={"/pdf/CV-Vazquez-Rodrigo.pdf"}>{idioma === "es" ? "CV" : "CV" }</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {idioma === "es" ? "Idioma" : "Language" }
                                </a>
                                <ul class="dropdown-menu">
                                   
                                    <li><a class="dropdown-item" href="#" id="es" onClick={(e)=>{cambiarIdioma(e.target.id)}}>{idioma === "es" ? "Español" : "Spanish" }</a></li>

                                    <li><hr class="dropdown-divider" /></li>

                                    <li><a class="dropdown-item" href="#" id="en" onClick={(e)=>{cambiarIdioma(e.target.id)}}>{idioma === "es" ? "Ingles" : "English" }</a></li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Menu 