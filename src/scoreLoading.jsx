import { useState, useEffect } from "react";

export const ScoreLoading = ({ icon, category, score, mostrando, index }) => {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    if (mostrando && loading < score) {
      const interval = setInterval(() => {
        setLoading((prev) => prev + 1);
      }, 20);
      return () => clearInterval(interval);
    }
  }, [mostrando, loading, score]);

  return (
    <div className={`score__container cont_${index}`}>
      <img src={icon} alt="" />
      <span className="category">{category}</span>
      <span className="score">{mostrando ? loading : "-"}</span>
      <span className="100"> / 100</span>
    </div>
  );
};
