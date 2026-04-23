import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Posts } from "./Components/Posts";
import { Todos } from "./Components/Todos";

export function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setPosts(json))
      .catch((err) => alert(err));
  }, []);

  return (
    <div id="App">
      <h1>5</h1>

      <div className="container">
        <nav>
          <Link to="/">Posts </Link>
          <Link to="/todos"> Todos</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Posts posts={posts} />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </div>
    </div>
  );
}
