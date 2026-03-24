import "./scss/Average.scss";

export const Result = ({ info }) => {
  return (
    <main>
      {/* Aquí se usa el bloque del número */}
      <div className="circulo-resultado">{info}</div>
    </main>
  );
};
