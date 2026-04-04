import "./scss/Average.scss";
import { useState, useEffect } from "react";

export const Result = ({ promedio, activar, timer }) => {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    if (activar && loading < promedio) {
      /* Solo empieza si 'activar' es true y no hemos llegado al score */
      const interval = setInterval(() => {
        if (timer === true)
          setLoading(
            (prev) => prev + 1,
          ); /* el prev hace que saque el valor inicial de loading */
      }, 20); /* cada 20 milisegundos se aumenta en 1 */
      return () =>
        clearInterval(interval); /* limpieza para que no se vuelva loco */
    }
  }, [activar, loading, promedio, timer]);

  return (
    <main className="result__main">
      {/* Aquí se usa el bloque del número */}

      <div className="circle__result">
        <p className="final__score">{loading}</p>
        <p className="of__total">of 100</p>
      </div>
      <div className="result__message">
        <h3 className="result__h3">Great</h3>
        <p className="result__text">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </main>
  );
};
