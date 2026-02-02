import React from "react";

function GuiaEstils() {
  return (
    <header>
      <div class="intro">
        <h1>Configuració de la web</h1>
        <h3>La nostra proposta per la pàgina:</h3>
      </div>
      <div className="main">
        <p><strong>Tipografia:</strong> <br /> Lletra primaria: 'Inter' <br />
        Lletra secundaria: sans-serif <br />  
        Tamany de font: 1.5rem
        </p>
        <p>
          <strong>Colors emprats:</strong> <br />
           --primary-color: #1a1a1a; <br />
           --accent-color: #3b82f6; <br />
           --bg-color: #f8fafc; <br />
           --card-bg: #ffffff; <br /> 
           --text-main: #1e293b; <br />
           --text-muted: #64748b; <br /> 
           --error-color: #ef4444;
        </p>
        <p><strong>Estils de menu: <br/></strong> 
        El navegador té un llistat de pàgines on: <br />
        Passar per sobre: El text canvia a color blau: #3b82f6 <br />
        Pàgina seleccionada: El text canvia a color blau: #3b82f6 amb una línea a sota i un fons blau-cel: #f8fafc
        </p>
         <p><strong>Botons:  </strong> <button>Botó</button></p>
      </div>
    </header>
  );
}

export default GuiaEstils; 
