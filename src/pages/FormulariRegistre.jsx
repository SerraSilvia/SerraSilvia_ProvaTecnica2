import React, { useRef, useEffect, useState } from "react";

function FormulariRegistre() {
  const nomRef = useRef(null);
  const [nom, setNom] = useState("");
  const [assumpte, setAssumpte] = useState("");
  const [correu, setCorreu] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    nomRef.current.focus(); 
  }, []);

  const validarEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleEnviar = () => {
    const nousErrors = {};
    if (!nom.trim()) nousErrors.nom = "Nom obligatori";
    if (!assumpte.trim()) nousErrors.assumpte = "Assumpte obligatori";
    if (!correu.trim()) {
      nousErrors.correu = "Correu obligatori";
    } else if (!validarEmail(correu)) {
      nousErrors.correu = "Correu invàlid";
    }

    setErrors(nousErrors);

    if (Object.keys(nousErrors).length === 0) {
      alert(`Formulari enviat!\nNom: ${nom}\nAssumpte: ${assumpte}\nCorreu: ${correu}`);
      setNom(""); setAssumpte(""); setCorreu("");
      setErrors({});
    }
  };

  return (
    <div className="main">
      <header>
        <h1>Formulari de registre</h1>
      </header>
      
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="nom">Nom:</label>
          <input 
            id="nom"
            ref={nomRef} 
            value={nom} 
            onChange={e => setNom(e.target.value)} 
            aria-label="Escriu el teu nom"
            className={errors.nom ? "input-error" : ""}
          />
          {errors.nom && <span className="error-text">{errors.nom}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="assumpte">Assumpte:</label>
          <input 
            id="assumpte"
            value={assumpte} 
            onChange={e => setAssumpte(e.target.value)} 
            aria-label="Escriu el teu assumpte"
            className={errors.assumpte ? "input-error" : ""}
          />
          {errors.cognom && <span className="error-text">{errors.assumpte}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="correu">Correu:</label>
          <input 
            id="correu"
            value={correu} 
            onChange={e => setCorreu(e.target.value)} 
            aria-label="Escriu el teu correu electrònic"
            className={errors.correu ? "input-error" : ""}
          />
          {errors.correu && <span className="error-text">{errors.correu}</span>}
        </div>

        <div
          role="button"
          tabIndex={0}
          className="custom-button"
          onClick={handleEnviar}
          onKeyDown={e => { if (e.key === "Enter" || e.key === " ") handleEnviar(); }}
          aria-label="Enviar formulari"
        >
          Registrar-me
        </div>
      </div>
    </div>
  );
}

export default FormulariRegistre;