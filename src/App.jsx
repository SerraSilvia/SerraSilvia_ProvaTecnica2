import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import GridImatges from "./pages/GridImatges";
import FormulariRegistre from "./pages/FormulariRegistre";
import MenuPrincipal from "./components/MenuPrincipal";
import GuiaEstils from "./pages/GuiaEstils";


function App() {
  return (
    <BrowserRouter>
    <div className="top-bar">
      <h1 className="logo">GransPaisatges</h1>
      <MenuPrincipal />
    </div>
      
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/GridImatges" element={<GridImatges />} />
        <Route path="/FormulariRegistre" element={<FormulariRegistre />} />
        <Route path="/guiaEstils" element={<GuiaEstils />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
