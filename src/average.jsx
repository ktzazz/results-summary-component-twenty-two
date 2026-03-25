import "./scss/Average.scss";

export const Result = ({ promedio }) => {
  return (
    <main>
      {/* Aquí se usa el bloque del número */}
      <div className="circulo-resultado">{promedio}</div>
    </main>
  );
};
