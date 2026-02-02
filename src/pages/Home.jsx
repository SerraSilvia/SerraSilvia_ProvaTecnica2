import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="main">
      <header>
        <h1>Benvinguts a Grans Paisatges </h1>
        <p>Descobreix fotografies de paisatges d'arreu del món.</p>
      </header>
      <img src="/img/fotos.jpg" alt="composicio_imatges" />
      <NavLink to="/GridImatges"><button>Veure més</button></NavLink>
    </div>
  );
}

export default Home;
