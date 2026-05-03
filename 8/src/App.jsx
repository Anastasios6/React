import React from "react";
import Hello from "./components/Hello";
import { HelloFunc } from "./components/HelloFunc";
import { NewFunc } from "./components/NewFunc";
import "./css/App.css";

export function App() {
  return (
    <div id="App">
      <h1>8</h1>
      <Hello />
      <hr />
      <span>
        Functional Hello:
        <HelloFunc />
      </span>
      <hr />
      <NewFunc />
    </div>
  );
}
