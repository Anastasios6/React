import React, { useState } from "react";
import { SignUp } from "./components/SignUp";
import { DataTable } from "./components/DataTable";
import { Comment } from "./components/Comment";
import "./css/style.css";
export function App() {
  const [usersList, setUsersList] = useState([]);
  return (
    <div id="App">
      <h1>3 Signup</h1>
      <SignUp setUsersList={setUsersList} />
      <h3>Table of users</h3>
      <DataTable users={usersList} />
    </div>
  );
}
