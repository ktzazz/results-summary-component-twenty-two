import { ScoreLoading } from "./scoreLoading";
import "./scss/dataTests.scss";

export const Summary = ({ resultados, mostrando }) => {
  return (
    <main>
      <div className="summary__main">
        {resultados.map(({ icon, category, score }, index) => (
          <ScoreLoading
            key={category}
            icon={icon}
            category={category}
            score={score}
            mostrando={mostrando}
            index={index}
          />
        ))}
      </div>
    </main>
  );
};
