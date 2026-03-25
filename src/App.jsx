import "./scss/App.scss"; // Cambiamos .css por .scss
import { Result } from "./average.jsx";
import { Summary } from "./dataTests.jsx";
import { useState, useEffect } from "react";

function App() {
  const [average, setAverage] = useState(0);
  const [tests, setTests] = useState([]);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("data.json");
      const data = await res.json();

      // se guarda la lista
      setTests(data);

      // calcula el promedio
      let suma = 0;
      data.forEach((item) => (suma += item.score));
      setAverage(Math.floor(suma / data.length));
    };

    getData(); // <-- Solo la llamas así
  }, []);

  return (
    <>
      <main>
        <div className="main__container">
          <div className="result__container">
            <h2 className="result__title">Your Result</h2>
            <div className="circle__container">
              <>
                <Result promedio={average} activar={start} />{" "}
                {/* prop es el alias que se le da a la informacion que se quiera pasar a otro componente */}
              </>
              <p className="100__p">of 100</p>
            </div>
            <>etiqueta para el mensaje</>
          </div>

          <div className="summary__container">
            <h2 className="summary__title">Summary</h2>
            <>
              <Summary resultados={tests} mostrando={start} />
            </>
            <button
              className={start === true ? "button__on " : "button__off"}
              onClick={() => setStart(true)}
            >
              Continue
            </button>
          </div>
        </div>
      </main>

      <footer className="attribution">
        {" "}
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/ktzazz">Katia Aragón</a>.
      </footer>
    </>
  );
}

export default App;
