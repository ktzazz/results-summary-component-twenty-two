import { useState, useEffect } from "react";

import "./scss/dataTests.scss";

export const Summary = () => {
  const [tests, setTests] = useState([]); // bloque para la lista completa

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setTests(data); // se guarda la lista tal cual para el Summary
      });
  }, []);

  return (
    <main>
      <div className="lista-resumen">
        {tests.map((item, index) => (
          <div key={index}>
            <img src={item.icon} alt="" />
            <span>{item.category}</span>
            <span>{item.score} / 100</span>
          </div>
        ))}
      </div>
    </main>
  );
};
