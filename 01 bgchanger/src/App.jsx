import { Fragment } from "react";
import { useState } from "react";

function App() {
  const [color, setcolor] = useState("#99CA63");
  return (
    <Fragment>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setcolor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setcolor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setcolor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setcolor("yellow")}
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;


// import React from "react";
// import { useState, useCallback } from "react";

// const App = () => {
//   const [length, setlength] = useState(8);
//   const [numallowed, setnumallowed] = useState(false);
//   const [charallowed, setcharallowed] = useState(false);
//   const [password, setpassword] = useState("");

//   const generatePassword = useCallback(() => {
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     let pass = "";
//     if (numallowed) str += "0123456789";
//     if (charallowed) str += "~!@#$%^&*(){}[]><,.";

//     for (let i = 1; i <= array.length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1);
//       pass = str.charAt(char);
//     }

//     setpassword(pass);
//   }, [length, numallowed, charallowed, setpassword]);

//   return (
//     <div>
//       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4  my-8 bg-gray-800 text-orange-500">
//         Test
//       </div>

//       <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
//         <input
//           className="outline-none w-full py-1 px-3"
//           type="text"
//           value={password}
//           placeholder="passsword"
//           readOnly
//         />
//         <button>Copy</button>
//       </div>
//       <div className="flex text-sm gap-x-2">
//         <div className="flex item-center gap-x-1">
//           <input
//             type="range"
//             min={8}
//             max={50}
//             value={length}
//             className="cursor-pointer"
//             onChange={(e) => {
//               setlength(e.target.value);
//             }}
//           />
//           <label>Length {length}</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input
//             type="checkbox"
//             defaultChecked={numallowed}
//             id="numberInput"
//             onChange={() => {
//               setNumberAllowed((prev) => !prev);
//             }}
//           />
//           <label htmlFor="numberInput">Numbers</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input
//             type="checkbox"
//             defaultChecked={charallowed}
//             id="characterInput"
//             onChange={() => {
//               setCharAllowed((prev) => !prev);
//             }}
//           />
//           <label htmlFor="characterInput">Characters</label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
// import { useState, useCallback, useEffect, useRef } from 'react'



// function App() {
//   const [length, setLength] = useState(8)
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false)
//   const [password, setPassword] = useState("")

//   //useRef hook
//   const passwordRef = useRef(null)

//   const passwordGenerator = useCallback(() => {
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if (numberAllowed) str += "0123456789"
//     if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1)
//       pass += str.charAt(char)
      
//     }

//     setPassword(pass)


//   }, [length, numberAllowed, charAllowed, setPassword])

//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0, 999);
//     window.navigator.clipboard.writeText(password)
//   }, [password])

//   useEffect(() => {
//     passwordGenerator()
//   }, [length, numberAllowed, charAllowed, passwordGenerator])
//   return (
    
//     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
//       <h1 className='text-white text-center my-3'>Password generator</h1>
//     <div className="flex shadow rounded-lg overflow-hidden mb-4">
//         <input
//             type="text"
//             value={password}
//             className="outline-none w-full py-1 px-3"
//             placeholder="Password"
//             readOnly
//             ref={passwordRef}
//         />
//         <button
//         onClick={copyPasswordToClipboard}
//         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
//         >copy</button>
        
//     </div>
//     <div className='flex text-sm gap-x-2'>
//       <div className='flex items-center gap-x-1'>
//         <input 
//         type="range"
//         min={6}
//         max={100}
//         value={length}
//          className='cursor-pointer'
//          onChange={(e) => {setLength(e.target.value)}}
//           />
//           <label>Length: {length}</label>
//       </div>
//       <div className="flex items-center gap-x-1">
//       <input
//           type="checkbox"
//           defaultChecked={numberAllowed}
//           id="numberInput"
//           onChange={() => {
//               setNumberAllowed((prev) => !prev);
//           }}
//       />
//       <label htmlFor="numberInput">Numbers</label>
//       </div>
//       <div className="flex items-center gap-x-1">
//           <input
//               type="checkbox"
//               defaultChecked={charAllowed}
//               id="characterInput"
//               onChange={() => {
//                   setCharAllowed((prev) => !prev )
//               }}
//           />
//           <label htmlFor="characterInput">Characters</label>
//       </div>
//     </div>
// </div>
    
//   )
// }

// export default App