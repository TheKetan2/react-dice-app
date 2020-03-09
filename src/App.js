import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Dice from "./Dice";

function App() {
  return (
    <div className="App">
      <Dice face="six" />
      <Dice face="six" />
    </div>
  );
}

export default App;
