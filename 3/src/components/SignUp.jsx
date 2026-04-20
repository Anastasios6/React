import React, { useState } from "react";
import { Input } from "./Input";
import { Comment } from "./Comment";

export const SignUp = ({ setUsersList }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [inputType, setInputType] = useState("password");
  const [comment, setComment] = useState("");

  function showInputValues(e) {
    e.preventDefault();
    alert(
      `Username: ${username}\nPassword: ${password}\nE-mail address: ${email}\n Contact number ${tel}\n Comment: ${comment}`,
    );
    const newUser = {
      username: username,
      password: password,
      email: email,
      tel: tel,
      comment: comment,
    };
    setUsersList((prevUsers) => [...prevUsers, newUser]);
  }
  function passwordButton() {
    setInputType(inputType === "password" ? "text" : "password");
  }

  return (
    <div id="signup-form">
      <form onSubmit={showInputValues}>
        <h2>Username</h2>
        <Input
          type={"text"}
          placeholder={"Enter Username"}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <h2>Password</h2>
        <Input
          type={inputType}
          placeholder={"Enter Password"}
          value={password}
          name={"passwordButton"}
          setToggle={passwordButton}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <h2>E-mail address</h2>
        <Input
          type={"email"}
          placeholder={"Enter your E-mail address"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <h2>Telephone number</h2>
        <Input
          type={"tel"}
          placeholder={"Contact number"}
          value={tel}
          onChange={(e) => {
            setTel(e.target.value);
          }}
        />
        <h2>Comment</h2>
        <Comment
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />

        <button id="SignupButton"> Sign Up</button>
      </form>
    </div>
  );
};
