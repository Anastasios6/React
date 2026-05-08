import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";

export function App() {
  return (
    <div id="app">
      <h1>App</h1>
      <nav>
        <Nav />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
