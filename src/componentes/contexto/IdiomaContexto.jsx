import React, { createContext, useState } from "react";

export const idiomaContext = createContext()

const IdiomaContexto = ({ children }) => {

    const [idioma, setIdioma] = useState("es")

    function cambiarIdioma(e) {
        setIdioma(e)
    }

    return (
        <idiomaContext.Provider value={{ idioma, cambiarIdioma }}>
            {children}
        </idiomaContext.Provider>
    )

}

export default IdiomaContexto