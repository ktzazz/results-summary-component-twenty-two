import "./scss/dataTests.scss";

export const Summary = ({ resultados, mostrando }) => {
  return (
    <main>
      <div className="summary__main">
        {resultados.map((item) => (
          <div key={item.category} className="summary__container">
            <img src={item.icon} alt="" />
            <span className={item.category}>{item.category}</span>
            <span className="score">{mostrando ? item.score : "-"}</span>
            <span className="100"> / 100</span>
          </div>
        ))}
      </div>
    </main>
  );
};
