import React, { useState } from "react";
import "./App.css";
import Student from "./Student";
const App = () => {
  const [name, setName] = useState(0);
  function data() {
    setName(name + 1);
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={data}>{name}</button>
      <Student
        name={"Ashish"}
        sirname={"Singh"}
        address={"Crossing Republic gol chakkar"}
      ></Student>
      <Student
        name={"Yashwant"}
        sirname={"Singh"}
        address={"Crossing Republic gol chakkar"}
      ></Student>
      <Student
        name={"Sharma"}
        sirname={"Singh"}
        address={"Crossing Republic gol chakkar"}
      ></Student>
      <Student
        name={"ABD"}
        sirname={"Singh"}
        address={"Crossing Republic gol chakkar"}
      ></Student>
    </div>
  );
};

export default App;
