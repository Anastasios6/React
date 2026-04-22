import React, { useState } from "react";
import { Todos } from "./components/Todos";
import { v4 } from "uuid";

export function App() {
  const [todos, setTodos] = useState([
    { id: v4(), text: "Learn React", done: false },
    { id: v4(), text: "Eat", done: false },
    { id: v4(), text: "coffee", done: true },
  ]);

  const [newTodo, setNewTodo] = useState("");
  function addNewTodo() {
    if (newTodo.trim() !== "") {
      let newlyAddedTodo = {
        id: v4(),
        text: newTodo,
        done: false,
      };
      setTodos([...todos, newlyAddedTodo]);

      setNewTodo("");
    } else {
      alert("Please enter a todo");
    }
  }
  function markTodoAsDone(clickedTodo) {
    console.log(clickedTodo);

    setTodos([
      ...todos.map((item) =>
        item.id === clickedTodo.id
          ? { id: item.id, text: item.text, done: !item.done }
          : item,
      ),
    ]);
  }

  function deleteTodo(id) {
    const todoDelete = todos.find((todo) => todo.id === id);
    console.log(todoDelete);
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...updatedTodos]);
  }

  return (
    <div id="App">
      <h1>4</h1>
      <input
        type="text"
        placeholder="enter Todo"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button onClick={addNewTodo}>Add Todo</button>
      <Todos
        todos={todos}
        markTodoAsDone={markTodoAsDone}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
