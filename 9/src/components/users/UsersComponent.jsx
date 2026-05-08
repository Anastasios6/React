import React from "react";

export const UsersComponent = ({ listOfUsers, error, deleteUser }) => {
  return (
    <div id="users-component">
      <h2>Users Component: {listOfUsers.length}</h2>
      {!error ? (
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listOfUsers.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                    >
                      Delete user
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1>{error}</h1>
      )}
    </div>
  );
};
