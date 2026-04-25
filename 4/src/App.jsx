import React, { useState } from "react";
import { Todos } from "./components/Todos";

export function App() {
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState("");
  function addNewTodo() {
    const randomID = Math.random().toString(12).substring(2, 11);
    if (newTodo.trim() !== "") {
      let newlyAddedTodo = {
        id: randomID,
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
  const [todosCounter, setTodosCounter] = useState(todos.length);

  const completedTodos = todos.filter((todo) => todo.done).length;

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  function editTodo(todo) {
    setEditingId(todo.id);
    setEditText(todo.text);
  }
  function saveEdit(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo,
      ),
    );
    setEditingId(null);
    setEditText("");
  }
  function cancelEdit() {
    setEditingId(null);
    setEditText("");
  }
  const [showCompleted, setShowCompleted] = useState(true);
  const completedTodosShow = showCompleted
    ? todos
    : todos.filter((todo) => !todo.done);
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

      <button
        onClick={() => {
          setTodosCounter(todosCounter + 1);
          addNewTodo();
        }}
      >
        Add new todo
      </button>
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? "Hide Completed" : "Show Completed"}
      </button>
      <h1>Todos list:</h1>
      <h1>Todos counter: {todosCounter}</h1>
      <h1>Completed todos:{completedTodos}</h1>
      <Todos
        todos={completedTodosShow}
        markTodoAsDone={markTodoAsDone}
        deleteTodo={deleteTodo}
        editingId={editingId}
        editText={editText}
        setEditText={setEditText}
        editTodo={editTodo}
        saveEdit={saveEdit}
        cancelEdit={cancelEdit}
      />
    </div>
  );
}
