import "./scss/Average.scss";
import { useState, useEffect } from "react";

export const Result = ({ promedio, activar }) => {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    if (activar && loading < promedio) {
      /* Solo empieza si 'activar' es true y no hemos llegado al score */
      const interval = setInterval(() => {
        setLoading(
          (prev) => prev + 1,
        ); /* el prev hace que saque el valor inicial de loading */
      }, 20); /* cada 20 milisegundos se aumenta en 1 */
      return () =>
        clearInterval(interval); /* limpieza para que no se vuelva loco */
    }
  }, [activar, loading, promedio]);

  return (
    <main>
      {/* Aquí se usa el bloque del número */}
      <div className="circle__result">
        <p className="final__score">{loading}</p>
        <p className="100__p">of 100</p>
      </div>
    </main>
  );
};
