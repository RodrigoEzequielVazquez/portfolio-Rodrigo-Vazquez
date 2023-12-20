import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { idiomaContext } from "./contexto/IdiomaContexto"
import Cursos from "./Cursos";

const Estudios = () => {

    const { idioma } = useContext(idiomaContext)

    let certificadoFront = `https://www.coderhouse.com/certificados/63e82401644d44000ec15e17?lang=${idioma}`
    let certificadoBack = `https://www.coderhouse.com/certificados/655559377ea0372f2bf1bf28?lang=${idioma}`

    return (
        <section id="contenedorEstudios">
            <div>
                <h1>{idioma === "es" ? "Mis estudios en programación." : "My studies in Programming."}</h1>

                {
                    idioma === "es" ? <p> Comence a estudiar programacion en <Link to={"https://www.coderhouse.com/"} target="blank">Coder-House</Link>, una plataforma 100% digital, complete la carrera de programador Full-stack, que se basaba en aprender HTML5 y CSS3, Javascript aplicado al front-end, React.js y finalmente Javascript aplicado desde el back-end. Por supuesto todo esto estuvo acompañado de aprender muchas herramientas para el desarrollo como las que se pueden observar en el <Link to={"/"}>Inicio</Link>. <br />
                        Por completar estos cursos obtuve los certificados de la carrera de <Link target="blank" to={certificadoFront}>desarrollo Front-end React</Link> y de <Link target="blank" to={certificadoBack}>desarrollo Full-Stack</Link>.
                        <br />
                        Actualmente ademas, me encuentro estudiando en el mismo sitio un curso sobre Python y en paralelo un curso de PHP y MySQL en <Link to={"https://sceu.frba.utn.edu.ar/e-learning/"} target="blank">UTN</Link>.
                    </p> :
                        <p>I started studying programming at <Link to={"https://www.coderhouse.com/"} target="blank">Coder-House</Link>, a 100% digital platform, I completed the Full-stack programmer career, which was based on learning HTML5 and CSS, Javascript applied to the front-end, React.js and finally Javascript applied from the back -end. Of course all this was accompanied by learning many development tools such as those that can be seen in the <Link to={"/"}>Home</Link>.
                            <br />
                            By completing these courses I obtained the certificates for the <Link target="blank" to={certificadoFront}>Front-end React development</Link> and <Link target="blank" to={certificadoBack}>Full-Stack development</Link> careers.
                            <br />
                            Currently, I am also studying a Python course at the same site and in parallel a PHP and MySQL course at <Link to={"https://sceu.frba.utn.edu.ar/e-learning/"} target="blank">UTN</Link>.</p>
                }
            </div>

            <div id="contenedorCursos">

                <Cursos curso={idioma === "es" ? "Desarrollo Web" : "Web development"} id={"desarrolloweb"} certificado={"633d0b506d46ee000ec3d76c"} aprendizaje={idioma === "es" ? "HTML5, CSS3, Flex, Grid, Git, Github, Bootsrap, diseños responsive en metodologias mobile first y desktop first,  pseudoclases, Sass, SEO basico, FileZilla." : "HTML5, CSS3, Flex, Grid, Git, Github, Bootsrap, responsive web design, pseudoclasses, Sass,basic SEO, FileZilla."} />

                <Cursos curso={"Javascript"} id={"js"} certificado={"63ab0e3a64be22000e65711c"} aprendizaje={idioma === "es" ? " Condicionales, operadores logicos, ciclos e iteraciones, funciones, objetos,  clases y sus metodos, arrays y sus metodos, DOM, eventos, storage y JSON, sugar syntax, desestructuracion, alias, librerias como Sweet Alert y Toastify,  asincronia y promesas,  Ajax y Fetch." : "Conditionals, logical operators, cycles and iterations, functions, objets,  classes and methods, arrays and methods, DOM, events, storage and JSON, sugar syntax, destructuring, alias, libraries like Sweet Alert and Toastify, asynchrony and promises,  Ajax and Fetch."} />

                <Cursos curso={"React Js"} id={"react"} certificado={"63e82401644d44000ec15e14"} aprendizaje={idioma === "es" ? " NodeJS, JSX, Componentes, Promesas, Routing y navegacion, eventos, contexto, React Memo, Firebase." : "NodeJS, JSX, Components, promises, Routing and navigation, events, context, React Memo, Firebase."} />

                <Cursos curso={"Back-end(JS)"} id={"backend"} certificado={"655559367ea037bce2f1bf1d"} aprendizaje={idioma === "es" ? "NPM, Express.JS, Router, Multer,  Handlebars, Postman, Websockets, MongoDB, sesiones, autenticacion con programas de terceros, JWT, Passport, arquitectura por capas, Nodemailer, Swagger, testing(Mocha y Chai), Nest.JS, pasarela de pago con Stripe, Twilio." : "NPM,  Express.JS, Router, Multer,  Handlebars, Postman, Websockets, MongoDB, sessions, authentication with third party programs, JWT, Passport, layered architecture, Nodemailer, Swagger, testing(Mocha y Chai), Nest.JS, e-commerce with Stripe, Twilio."} />

            </div>

        </section>
    )
}

export default Estudios