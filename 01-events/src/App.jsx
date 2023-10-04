import React, { Fragment, useState ,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Student from "./Student";
import Button from "react-bootstrap/Button";
import './App.css'
const App = () => {
  const [name, setName] = useState(100);
  const [datas, setData] = useState(0);
  useEffect(()=>{
    console.warn("This is me");
  },[datas])
  return (
    <Fragment>
      <h1 className="data">Datas : {datas}</h1>
      <h1 className="data">name : {name}</h1>
      <Button onClick={()=>setName(name-1)} variant="outline-primary">++</Button>{" "}
      <Button onClick={()=>setData(datas+1)} variant="primary">---</Button>{" "}
      
    </Fragment>
  );
};

export default App;
