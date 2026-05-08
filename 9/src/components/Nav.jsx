import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "./auth/duck/Operations";

export const Nav = () => {
  const dispatch = useDispatch();
  return (
    <ul id="nav">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/users"}>Users</Link>
      </li>
      <li>
        <button
          onClick={() => {
            dispatch(logOut());
          }}
        >
          Logout
        </button>
      </li>
    </ul>
  );
};
