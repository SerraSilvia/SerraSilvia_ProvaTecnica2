import React from "react";

function GridImatges() {
  const fotos = [
    {
      id: 1,
      alt: "imatge_d'una posta de sol a Menorca",
      src: "/img/atardecer.jpg", 
    },
    {
      id: 2,
      alt: "imatge d'una platja de Tailandia",
      src: "/img/beach.jpg",
    },
    {
      id: 3,
      alt: "imatge d'una cascada del Monasterio de Piedra",
      src: "/img/cascada.webp",
    },
        {
      id: 4,
      alt: "imatge d'un passeig de cirerers japonesos",
      src: "/img/cerezos.jpg",
    },
        {
      id: 5,
      alt: "imatge d'una barca a terra en un camp de flors roses",
      src: "/img/flores_rosas.webp",
    },
        {
      id: 6,
      alt: "imatge de portes tori d'un temple japonès",
      src: "/img/toris.webp",
    },
  ];

  return (
    <div className="main">
      <header>
        <h1>Fotografies del Món</h1>
        <p>Les nostres fotografies més boniques</p>
      </header>

      <div className="gallery-grid">
        {fotos.map((foto) => (
          <div key={foto.id} className="gallery-item">
            <img 
              src={foto.src} 
              srcSet={foto.srcset} 
              sizes="(max-width: 768px) 100vw, 33vw"
              alt={foto.alt}
              loading="lazy"
              className="gallery-img"
            />
            <p className="image-caption">{foto.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridImatges;