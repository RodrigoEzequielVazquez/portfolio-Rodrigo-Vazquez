import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import "./estilos/main.scss"
import Footer from "./componentes/Footer";
import Menu from "./componentes/Menu";
import Estudios from "./componentes/Estudios";
import Proyectos from "./componentes/Proyectos";

function App() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/certificaciones" element={<Estudios/>}/>
        <Route path="/proyectos" element={<Proyectos/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
