import "./scss/Average.scss";
import { useState, useEffect } from "react";

export const Result = ({ promedio, activar }) => {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    if (activar && loading < promedio) {
      const interval = setInterval(() => {
        setLoading((prev) => prev + 1);
      }, 20);
      return () => clearInterval(interval);
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
