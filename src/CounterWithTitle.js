import React, { useState, useEffect } from 'react';

function CounterWithTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = (count == 0) ? "tp2 ex3" :`Clics : ${count}`;
  }, [count]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };



  return (
    <div >
      <h2>Exercice 3 : Compteur avec effet personnalisé</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3 >
          {count}
        </h3>

        <div >
          <button
            onClick={decrement}
          >
            -1
          </button>

          <button
            onClick={increment}
          >
            +1
          </button>

          <button
            onClick={reset}
          >
            Réinitialiser
          </button>
        </div>
      </div>

    </div>
  );
}

export default CounterWithTitle;