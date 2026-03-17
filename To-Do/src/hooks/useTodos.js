import React from "react";
import { useState, useEffect } from "react";
const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, text: "herry potter", completed: false },
          { id: 2, text: "Avenger", completed: true },
          { id: 3, text: "Fifty Shades of Gray", completed: false },
          { id: 4, text: "365 Days", completed: true },
        ];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAdd(text) {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTask]);
  }

  function handleDel(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleToggle(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }
  return { todos, handleAdd, handleDel, handleToggle };
};

export default useTodos;
