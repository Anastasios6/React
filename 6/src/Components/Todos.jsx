import React, { useEffect, useState } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  function getTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setTodos(json))
      .catch((err) => alert(err));
  }

  useEffect(() => {
    getTodos();
  }, []);

  function markDone(id) {
    setTodos([
      ...todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    ]);
  }
  return (
    <div id="Todos">
      <h2>Todos</h2>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p>
              {todo.title}
              <input
                type="checkbox"
                checked={todo.completed}
                value={todo.completed}
                onChange={() => {
                  markDone(todo.id);
                }}
              />
            </p>
          </div>
        );
      })}
    </div>
  );
};
