import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  //setCount = 5; // Cambio se realiza en el cambiante (setCount) en lugar del estado (count)
  const handleClick = () => {
    setCount((count) => count + 1);
  };

  const [screen, setScreen] = useState("");

  //const [value, setValue] = useState("");

  const handleNumberClick = (number) => {
    setScreen(screen + number);
  };

  return (
    <>
      <h2>Calculadora</h2>

      <div className="calculator">
        <div className="screen">{screen}</div>
        <br />
        <button label="1" onClick={() => handleNumberClick("1")}>
          1
        </button>

        <button label="2" onClick={() => handleNumberClick("2")}>
          2
        </button>

        <button label="3" onClick={() => handleNumberClick("3")}>
          3
        </button>

        <button label="+" onClick={() => handleNumberClick("+")}>
          +
        </button>

        <br />

        <button label="4" onClick={() => handleNumberClick("4")}>
          4
        </button>

        <button label="5" onClick={() => handleNumberClick("5")}>
          5
        </button>

        <button label="6" onClick={() => handleNumberClick("6")}>
          6
        </button>

        <button label="-" onClick={() => handleNumberClick("-")}>
          -
        </button>

        <br />
        <button label="7" onClick={() => handleNumberClick("7")}>
          7
        </button>

        <button label="8" onClick={() => handleNumberClick("8")}>
          8
        </button>

        <button label="9" onClick={() => handleNumberClick("9")}>
          9
        </button>

        <button label="*" onClick={() => handleNumberClick("*")}>
          *
        </button>

        <br />
        <button label="0" onClick={() => handleNumberClick("0")}>
          0
        </button>

        <button label="." onClick={() => handleNumberClick(".")}>
          .
        </button>

        <button
          label="="
          onClick={() => {
            try {
              setScreen(eval(screen).toString());
            } catch {
              setScreen("Error");
            }
          }}
        >
          =
        </button>
        <button label="C" onClick={() => setScreen("")}>
          C
        </button>
      </div>

      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
