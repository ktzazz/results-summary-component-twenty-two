import "./scss/Average.scss";

import { useState, useEffect } from "react";

export const Result = () => {
  const [average, setAverage] = useState(0); // bloque para el número final

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        //se calcula el promedio
        let suma = 0;
        data.forEach((item) => (suma += item.score));
        setAverage(Math.floor(suma / data.length));
      });
  }, []);
  return (
    <main>
      {/* Aquí se usa el bloque del número */}
      <div className="circulo-resultado">{average}</div>
    </main>
  );
};
