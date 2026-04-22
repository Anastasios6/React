import React, { useState } from "react";

export const DataTable = ({ users }) => {
  const [tableVisibilty, setTableVisibility] = useState(false);

  return (
    <div id="tableContainer">
      <button
        className="tableVisibility"
        onClick={() => {
          setTableVisibility(!tableVisibilty);
        }}
      >
        {tableVisibilty ? "Hide users table" : "Show Users table"}
      </button>
      {tableVisibilty && (
        <table>
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
      )}
    </div>
  );
};
