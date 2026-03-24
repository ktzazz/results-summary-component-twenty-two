import "./scss/dataTests.scss";

export const Summary = ({ resultados }) => {
  return (
    <main>
      <div className="lista-resumen">
        {resultados.map((item, index) => (
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
