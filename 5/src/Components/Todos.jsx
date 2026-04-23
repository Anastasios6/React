import React, { useEffect, useState } from "react";
import "../css/style.css";
export const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setTodos(json))
      .catch((err) => alert(err));
  }, []);
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }
  return (
    <div className="todos">
      <h1>Todos</h1>
      {todos.slice(0, 5).map((todo) => {
        return (
          <div className="todo">
            <h2>Todo</h2>
            <h1>{todo.title}</h1>
            <input
              type="checkbox"
              onChange={() => {
                toggleTodo(todo.id);
              }}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.completed ? "completed" : "incomplete"}
            </span>
          </div>
        );
      })}
    </div>
  );
};
