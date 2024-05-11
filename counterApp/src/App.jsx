import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  function increment() {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }
  function decrement() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>
        Welcome Back <span style={{ color: "red" }}>React ...</span>
      </h1>
      <h2> Counter : {counter}</h2>
      <button onClick={increment}>Increment</button>
      <br />
      <br />
      <button onClick={decrement}>Decrement</button>
      <br />
    </>
  );
}

export default App;
