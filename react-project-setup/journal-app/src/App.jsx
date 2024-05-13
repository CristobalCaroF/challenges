import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body>
        <header>
          <h1>Journal</h1>
        </header>
        <main>
          <h2>NEW ENTRY</h2>
          <label htmlFor="">Motto</label>
          <form action="">
            <textarea name="" id=""></textarea>
          </form>
          <label htmlFor="">Notes</label>
          <form action="">
            <textarea name="" id=""></textarea>
          </form>
          <button>Create</button>
        </main>
        <footer>Journal App - 2028</footer>
      </body>
    </>
  );
}

export default App;
