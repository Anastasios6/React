import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/style.css";

export const Comments = () => {
  const [comments, setComments] = useState(undefined);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setComments(res.data))
      .catch((err) => alert(err));
  }, []);
  async function deleteItem(commentId) {
    const deletedItem = await axios.delete(
      "https://jsonplaceholder.typicode.com/comments/" + commentId,
    );
    alert("Comment has been deleted");
    setComments([...comments.filter((item) => item.id !== commentId)]);
  }
  return (
    <div id="Comments">
      {comments && (
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((com) => {
              return (
                <tr key={com.id}>
                  <td>{com.id}</td>
                  <td>{com.name}</td>
                  <td>{com.email}</td>
                  <td>
                    {com.body.substring(0, 50)}
                    <Link to={`/comment/${com.id}`}>...More</Link>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        deleteItem(com.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
