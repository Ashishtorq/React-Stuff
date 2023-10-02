import React, { useEffect } from "react";
import { useState, useCallback,useRef } from "react";

const App = () => {
  const [length, setlength] = useState(8);
  const [numallowed, setnumallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState("");

  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (numallowed) str += "0123456789";
    if (charallowed) str += "~!@#$%^&*(){}[]><,.";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numallowed, charallowed, setpassword]);

  useEffect(() => {
    generatePassword();
  }, [length, numallowed, charallowed, generatePassword]);

  const passwordRef  = useRef(null)

  const copyPasswordtoClickboard  = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password) },[password])

  return (
    <div>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4  my-8 bg-gray-800 text-orange-500">
        
      </div>

      <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
        <input
          className="outline-none w-full py-1 px-3"
          type="text"
          value={password}
          placeholder="passsword"
          readOnly
          ref = {passwordRef}
        />
        <button onClick={copyPasswordtoClickboard}>Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex item-center gap-x-1">
          <input
            type="range"
            min={8}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label>Length {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numallowed}
            id="numberInput"
            onChange={() => {
              setnumallowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charallowed}
            id="characterInput"
            onChange={() => {
              setcharallowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
};

export default App;
