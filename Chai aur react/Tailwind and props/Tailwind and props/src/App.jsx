import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";
function App() {
  const [count, setCount] = useState(0);

  let obj = {
    name : "ashish singh",
    age : 21
  }

  let newarr = [1,2,3,4]

  return (
    <div>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <Card name = "Ashish Singh" object={obj} arr={newarr}/>

    </div>
  );
}

export default App;
