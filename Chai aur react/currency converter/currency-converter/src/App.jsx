import { Fragment, useState } from "react";
import InputBox from "./Components/InputBox";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <h1 className="text-3xl bg-orange-700 mb-20" >Currency App</h1>
      <InputBox />
    </Fragment>
  );
}

export default App;
