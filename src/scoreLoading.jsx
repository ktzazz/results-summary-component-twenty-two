import { useState, useEffect } from "react";
import "./scss/ScoreLoading.scss";

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
      <img className="image" src={icon} alt="" />
      <span className="category">{category}</span>
      <div className="numbers">
        <span className="score">{mostrando ? loading : "-"}</span>
        <span className="of"> / 100</span>
      </div>
    </div>
  );
};
