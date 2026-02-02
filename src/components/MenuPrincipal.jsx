import React from "react";
import { NavLink } from "react-router-dom";

function MenuPrincipal() {
  return (
    <nav role="navigation" className="navbar">
      <div className="nav-links">
        <NavLink to="/Home">HOME</NavLink>
        <NavLink to="/GridImatges">CATALEG</NavLink>
        <NavLink to="/FormulariRegistre">CONTACTE</NavLink>
        <NavLink to="/GuiaEstils">GUIA D'ESTILS</NavLink>
      </div>
    </nav>
  );
}

export default MenuPrincipal;
