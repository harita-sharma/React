import React, { useState } from "react" ;

import "./assets/css/style.css";

import Button from "./components/Button";

function App() {
  
  const [count, setCount] = useState(0);

  let incrementCounter = () => {
    setCount(count + 1);
  }

  let decrementCounter = () => {
    setCount(count - 1);
  }
  return (
    <div className="app">
      <div>
      <div class="Count">
        <h3>Counter : </h3>
      <h1>{count}</h1>
      </div>
      <div class = "buttons">
      <Button  title={"-"} action ={decrementCounter} />
      <Button title={"+"}  action = {incrementCounter} />
      
    </div>
    </div>
    </div>
    
  );
}

export default App;
