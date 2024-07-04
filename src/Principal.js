import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import Episodios from "./components/Episodios";
import OtraInformacion from "./components/OtraInformacion";
import Home from "./components/Home";

function Principal() {
    return (
        <BrowserRouter>
            <Home/>
        <Routes>
            <Route path = "/"   element={<App/>}/>
            <Route path = "/App"   element={<App/>}/>
            <Route path = "/Episodios"   element={<Episodios/>}/>
            <Route path = "/Informacion"   element={<OtraInformacion/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Principal;