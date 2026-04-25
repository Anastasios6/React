import React, { useState } from "react";

export const Todos = ({
  todos,
  markTodoAsDone,
  deleteTodo,
  editingId,
  editText,
  setEditText,
  editTodo,
  saveEdit,
  cancelEdit,
}) => {
  return (
    <div>
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
            const isEditing = editingId === todo.id;
            return (
              <tr key={i}>
                <td> {todo.id}</td>
                <td>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                  ) : (
                    todo.text
                  )}
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => {
                      markTodoAsDone(todo);
                    }}
                  />
                </td>
                <td>
                  {isEditing ? (
                    <>
                      <button
                        onClick={() => {
                          saveEdit(todo.id);
                        }}
                      >
                        Save
                      </button>
                      <button onClick={cancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          deleteTodo(todo.id);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          editTodo(todo);
                        }}
                      >
                        Edit
                      </button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
