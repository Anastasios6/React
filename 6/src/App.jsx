import React from "react";
import { Nav } from "./Components/Nav";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div id="App">
      <h1>6</h1>
      <nav>
        <Nav />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
