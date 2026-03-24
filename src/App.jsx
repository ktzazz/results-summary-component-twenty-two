import "./scss/App.scss"; // Cambiamos .css por .scss
import { Result } from "./average.jsx";
import { Summary } from "./dataTests.jsx";
function App() {
  return (
    <>
      <main>
        <div className="main__container">
          <div className="result__container">
            <h2 className="result__title">Your Result</h2>
            <div className="circle__container">
              <>
                <Result />
              </>
              <p className="100__p">of 100</p>
            </div>
            <>etiqueta para el mensaje</>
          </div>

          <div className="summary__container">
            <h2 className="summary__title">Summary</h2>
            <>
              <Summary />
            </>
            <button className="summary__button">Continue</button>
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
