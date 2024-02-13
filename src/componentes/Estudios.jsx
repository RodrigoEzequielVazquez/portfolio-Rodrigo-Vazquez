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
                    idioma === "es" ? <p> Comencé a estudiar programación en <Link to={"https://www.coderhouse.com/"} target="blank">Coder-House</Link>, una plataforma 100% digital. Completé la carrera de programador Full-stack, que se basaba en aprender HTML5 y CSS3, JavaScript aplicado al front-end, React.js y finalmente JavaScript aplicado desde el back-end. Por supuesto, todo esto estuvo acompañado de aprender muchas herramientas para el desarrollo como las que se pueden observar en el <Link to={"/"}>Inicio</Link>.
                        <br />
                        Por completar estos cursos obtuve los certificados de la carrera de <Link target="blank" to={certificadoFront}>desarrollo Front-end React</Link> y de <Link target="blank" to={certificadoBack}>desarrollo Full-Stack</Link>.
                        <br />
                        Además, recientemente termine un curso de Python en la misma plataforma y otro de PHP y MySQL en <Link to={"https://sceu.frba.utn.edu.ar/e-learning/"} target="blank">UTN</Link>.
                    </p> :
                        <p>I started studying programming at <Link to={"https://www.coderhouse.com/"} target="blank">Coder-House</Link>, a 100% digital platform. I completed the Full-stack programmer career, which was based on learning HTML5 and CSS, Javascript applied to the front-end, React.js and finally Javascript applied from the back -end. Of course all this was accompanied by learning many development tools such as those that can be seen in the <Link to={"/"}>Home</Link>.
                            <br />
                            By completing these courses I obtained the certificates for the <Link target="blank" to={certificadoFront}>Front-end React development</Link> and <Link target="blank" to={certificadoBack}>Full-Stack development</Link> careers.
                            <br />
                            In addition, I recently completed a Python course on the same platform and another on PHP and MySQL at <Link to={"https://sceu.frba.utn.edu.ar/e-learning/"} target="blank">UTN</Link>.</p>
                }
            </div>

            <div id="contenedorCursos">

                <Cursos curso={idioma === "es" ? "Desarrollo Web" : "Web development"} id={"desarrolloweb"} certificado={"633d0b506d46ee000ec3d76c"} aprendizaje={idioma === "es" ? "HTML5, CSS3, Flex, Grid, Git, Github, Bootsrap, diseños responsive en metodologias mobile first y desktop first, SASS, SEO basico." : "HTML5, CSS3, Flex, Grid, Git, Github, Bootsrap, responsive web design, SASS,basic SEO."} />

                <Cursos curso={"Javascript"} id={"js"} certificado={"63ab0e3a64be22000e65711c"} aprendizaje={idioma === "es" ? "ECMAScript 6 en adelante, librerias como Sweet Alert y Toastify, consumo de API." : "ECMAScript 6 onwards, libraries like Sweet Alert and Toastify, asynchrony and promises, API."} />

                <Cursos curso={"React Js"} id={"react"} certificado={"63e82401644d44000ec15e14"} aprendizaje={idioma === "es" ? " NodeJS, JSX,Routing y navegacion, eventos, contexto, React Memo, Firebase." : "NodeJS, JSX, Routing and navigation, events, context, React Memo, Firebase."} />

                <Cursos curso={"Back-end(JS)"} id={"backend"} certificado={"655559367ea037bce2f1bf1d"} aprendizaje={idioma === "es" ? "NPM, Express.JS, Router, Multer,  Handlebars, Postman, Websockets, MongoDB, CRUD con MongoDB, sesiones, autenticacion con programas de terceros, JWT, Passport, arquitectura por capas, Nodemailer, Swagger, testing(Mocha y Chai), Nest.JS, pasarela de pago con Stripe, Twilio." : "NPM,  Express.JS, Router, Multer,  Handlebars, Postman, Websockets, MongoDB,CRUD with MongoDB,  sessions, authentication with third party programs, JWT, Passport, layered architecture, Nodemailer, Swagger, testing(Mocha y Chai), Nest.JS, e-commerce with Stripe, Twilio."} />

                <Cursos curso={"Python"} id={"python"} certificado={""} aprendizaje={idioma === "es" ? "Entornos virtuales con Pipenv, Django, modelos, vistas y templates, gestionar usuarios, autenticación, registro y perfiles utilizando los módulos nativos de Django, contextos, formularios, mixins, CRUD, paginación, señales, managers, test." : "Virtual environments with Pipenv, Django, models, views and templates, manage users, authentication, registration and profiles using the native Django modules, contexts, forms, mixins, CRUD, pagination, signals, managers, tests."} />

                <Cursos curso={"PHP y MySQL"} id={"phpmysql"} certificado={"655559367ea037bce2f1bf1d"} aprendizaje={idioma === "es" ? "Lenguaje SQL, consultas SQL, variables, constantes, operadores y estructuras de control y de datos en PHP." : "SQL language, SQL queries, variables, constants, operators and control and data structures in PHP."} />

            </div>

        </section>
    )
}

export default Estudios