import React from "react";

export const Todos = ({ todos, markTodoAsDone, deleteTodo }) => {
  return (
    <div>
      <h1>Todos</h1>
      <table border={1} width={"100%"}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, i) => {
            return (
              <tr key={i}>
                <td> {todo.id}</td>
                <td>{todo.text}</td>
                <td>
                  <input
                    type="checkbox"
                    value={todo.done}
                    checked={todo.done}
                    onChange={() => {
                      markTodoAsDone(todo);
                    }}
                  />
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteTodo(todo.id);
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
    </div>
  );
};
