import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/albums"}>Albums</Link>
      </li>
      <li>
        <Link to={"/gallery"}>Gallery</Link>
      </li>
    </ul>
  );
};
