import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { idiomaContext } from "./contexto/IdiomaContexto"

const Estudios = () => {

    const { idioma } = useContext(idiomaContext)

    return (
        <section id="contenedorEstudios">
            <div>
                <h1>{idioma === "es" ? "Mis estudios en programación" : "My studies in Programming"}</h1>
                {
                    idioma === "es" ? <p>Todos mis estudios los realicé en <Link to={"https://www.coderhouse.com/"} target="blank">Coder-House</Link>, una plataforma 100% digital,  a día de hoy llevo 3 cursos finalizados con enfoque al desarrollo front-end,  y actualmente me encuentro estudiando un curso de "programacion back-end" hasta el dia 04/10/23.</p> :
                        <p>Everything I know about it, I learned it on <Link to={"https://www.coderhouse.com/"} target="blank">Coder-House </Link>digital platform. Up to date, I've already finished 3 different courses focused specifically on front-end development, and currently I'm studying one regarding back-end development, with expected end date on 10/04/23.</p>
                }
            </div>

            <div id="contenedorCursos">

                <div className="curso">
                    <div id="nombreCurso">
                        <h2 id="desarrolloWeb">{idioma === "es" ? "Desarrollo Web" : "Web development"}</h2>

                        <Link target="blank" to={"https://www.coderhouse.com/certificados/633d0b506d46ee000ec3d76c"}>
                            <p>{idioma === "es" ? "Ver certificado" : "Certificate"}</p>
                        </Link>
                    </div>

                    <h3>
                        {idioma === "es" ? "Que aprendí en el Curso de Desarrollo Web?" : "What did I learn in the Web Development Training? "}

                    </h3>
                    <p>
                        {idioma === "es" ? "HTML5, CSS3, Flex, Grid, Git, Github, Bootsrap, diseños responsive en metodologias mobile first y desktop first,  pseudoclases, Sass, SEO basico, FileZilla." : "HTML5, CSS3, Flex, Grid, Git, Github, Bootsrap, responsive web design, pseudoclasses, Sass,basic SEO, FileZilla."}

                    </p>
                </div>

                <div className="curso">
                    <div id="nombreCurso">
                        <h2 id="js">Javascript</h2>

                        <Link target="blank" to={"https://www.coderhouse.com/certificados/63ab0e3a64be22000e65711c"}>
                            <p>{idioma === "es" ? "Ver certificado" : "Certificate"}</p>
                        </Link>
                    </div>

                    <h3>
                        {idioma === "es" ? "Que aprendí en el Curso de Javascript?" : "What did I learn in the Javascript Training? "}
                    </h3>
                    <p>
                        {idioma === "es" ? " Condicionales, operadores logicos, ciclos e iteraciones, funciones, objetos,  clases y sus metodos, arrays y sus metodos, DOM, eventos, storage y JSON, sugar syntax, desestructuracion, alias, librerias como Sweet Alert y Toastify,  asincronia y promesas,  Ajax y Fetch." : "Conditionals, logical operators, cycles and iterations, functions, objets,  classes and methods, arrays and methods, DOM, events, storage and JSON, sugar syntax, destructuring, alias, libraries like Sweet Alert and Toastify, asynchrony and promises,  Ajax and Fetch."}
                    </p>
                </div>

                <div className="curso">
                    <div id="nombreCurso">
                        <h2 id="react">React Js</h2>

                        <Link target="blank" to={"https://www.coderhouse.com/certificados/63e82401644d44000ec15e14"}>
                            <p>{idioma === "es" ? "Ver certificado" : "Certificate"}</p>
                        </Link>
                    </div>

                    <h3>
                        {idioma === "es" ? "Que aprendí en el Curso de React Js?" : "What did I learn in the React Js Training? "}

                    </h3>
                    <p>

                        {idioma === "es" ? " NodeJS, JSX, Componentes, Promesas, Routing y navegacion, eventos, contexto, React Memo, Firebase." : "NodeJS, JSX, Components, promises, Routing and navigation, events, context, React Memo, Firebase."}

                    </p>
                </div>

            </div>

        </section>
    )
}

export default Estudios