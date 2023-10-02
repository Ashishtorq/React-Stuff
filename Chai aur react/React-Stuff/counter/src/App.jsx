import { Fragment } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setcounter] = useState(0);

  const addValue = () => {
    if (counter < 5) {
      setcounter(counter + 1);
    }
  };

  const subValue = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  };

  return (
    <Fragment>
      <h1>Code aur Chai</h1>
      <h3>Counter Value : {counter} </h3>
      <button onClick={addValue}>Add Value </button>
      <br />
      <br />
      <button onClick={subValue}>Subtract Value </button>
    </Fragment>
  );
}

export default App;
