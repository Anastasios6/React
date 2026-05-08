import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIntoApp } from "./duck/Operations";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function logIn() {
    try {
      await dispatch(logIntoApp(loginData));
      navigate("/users");
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div id="Login">
      <h1>Login</h1>
      <label htmlFor="">Username:</label>
      <input
        type="text"
        placeholder="Enter Username"
        value={loginData.username}
        onChange={(e) => {
          setLoginData({ ...loginData, username: e.target.value });
        }}
      />
      <br />
      <label htmlFor="">Password:</label>
      <input
        type="password"
        placeholder="Enter Password"
        value={loginData.password}
        onChange={(e) => {
          setLoginData({ ...loginData, password: e.target.value });
        }}
      />
      <br />
      <button onClick={logIn}>Login</button>
    </div>
  );
};
