import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { Todos } from "./Components/Todos";
import { Posts } from "./Components/Posts";
import { Comments } from "./Components/Comments";
import { CommentDetails } from "./Components/CommentDetails";
import { PostComments } from "./Components/PostComments";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path={"/"} element={<App />}>
        <Route path={"/todos"} element={<Todos />} />
        <Route path={"/posts"} element={<Posts />} />
        <Route path={"/comments"} element={<Comments />} />
        <Route path={"/comment/:commentId"} element={<CommentDetails />} />
        <Route path={"/post/:postId"} element={<PostComments />} />
      </Route>
    </Routes>
  </Router>,
);
