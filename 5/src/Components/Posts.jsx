import React from "react";

export const Posts = ({ posts }) => {
  return (
    <div className="posts-table">
      <h1>Posts</h1>
      <table border={1} width={"100%"}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.slice(0, 5).map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
