import React from 'react';
import { useState } from 'react';


function App() {
  const [input, setInput] = useState("");
  const changeHandler = (e)=> {
    const inputValue = e.target.value;
    if (inputValue.charAt(0) === "#" ){
     console.log(inputValue.length)
      if(inputValue.length===4 || inputValue.length===7){
        document.body.style.backgroundColor = inputValue;
      }
      else{
        document.body.style.backgroundColor = "#FFF";
      }
    }
    setInput(inputValue);
  }
  return (
    <>
    <h1>Hi React Learner</h1>
    <input onChange={changeHandler} value={input}/>
    <p>{input}</p>
    </>
  );
}

export default App