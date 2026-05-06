import React from "react";
import { Nav } from "./components/Nav";
import { Outlet } from "react-router-dom";
import "./css/App.css";
export function App() {
  return (
    <div>
      <h1>9</h1>
      <hr />
      <nav>
        <Nav />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
