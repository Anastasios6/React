import React from "react";
import { Age } from "./components/Age";
import { Address } from "./components/Address";
import "./App.css";
export function App() {
  const Users = [
    { name: "Nikola", lastName: "Nikolovski", address: "Skopje", age: 22 },
    { name: "Stefan", lastName: "Stefanovski", address: "Gostivar", age: 21 },
    { name: "Marko", lastName: "Markovski", address: "Bitola", age: 14 },
    { name: "Milan", lastName: "Ivanov", address: "Skopje", age: 17 },
  ];

  return (
    <div>
      <h1>Age</h1>
      <Age data={Users} />
      <h1>Addresses</h1>
      <Address data={Users} />
    </div>
  );
}
