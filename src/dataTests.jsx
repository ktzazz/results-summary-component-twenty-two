import "./scss/dataTests.scss";

export const Summary = ({ resultados }) => {
  return (
    <main>
      <div className="lista-resumen">
        {resultados.map((item) => (
          <div key={item.category}>
            <img src={item.icon} alt="" />
            <span>{item.category}</span>
            <span>{item.score} / 100</span>
          </div>
        ))}
      </div>
    </main>
  );
};
