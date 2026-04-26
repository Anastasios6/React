import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const PostComments = () => {
  const [comments, setComments] = useState([]);
  let { postId } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => setComments(res.data))
      .catch((err) => alert(err));
  }, []);

  return (
    <div id="Post-comments">
      {comments.map((com) => {
        return (
          <div key={com.id}>
            <h1>Comment:{com.name}</h1>
            <h2>Email:{com.email}</h2>
            <p>body:{com.body}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
