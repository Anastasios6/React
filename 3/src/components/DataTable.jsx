import React from "react";

export const DataTable = ({ users }) => {
  return (
    <div id="tableContainer">
      <table border={1} width={100}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>E-mail</th>
            <th>Contact number</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>{user.tel}</td>
              <td>{user.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
