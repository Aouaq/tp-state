import React, { useState } from 'react';

function DynamicText() {
  const [clickCount, setClickCount] = useState(0);
  const [message, setMessage] = useState("Premier clic");

  const texts = ["Premier clic", "Deuxième clic", "Troisième clic"];

  const handleClick = () => {
    const nextCount = (clickCount + 1) % 3;
    setClickCount(nextCount);
    setMessage(texts[nextCount]);
  };

  return (
    <div >
      <h2>Exercice 1 : Affichage dynamique</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>{message}</p>
      <button onClick={handleClick}>Cliquez ici</button>
      <p>Clics : {clickCount + 1}/3</p>
    </div>
  );
}

export default DynamicText;