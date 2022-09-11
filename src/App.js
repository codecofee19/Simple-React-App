
import './App.css';
import {useState} from "react";


function App() {

  const alertInput = (value) => {
    alert(value);
  }


  let welcome = "Welcome to hack week";
  

  return (
    <div className="App">
      <h1>Trying out React</h1>
          <button onClick={() => alert(welcome)}>
            Click the button for a suprise!
          </button>
    </div>
  );
}

export default App;
