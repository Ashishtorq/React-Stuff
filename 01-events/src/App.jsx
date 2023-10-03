import React, { Fragment, useState } from "react";
import "./App.css";
import Student from "./Student";
const App = () => {
  const [name, setName] = useState(0);
  function data() {
   console.warn(val.taget.value)
  }
  return (
    <Fragment>
     <h1>Hello Fill this form</h1>
     <input type="text" onChange={()=>data}/>
    </Fragment>
  );
};

export default App;
