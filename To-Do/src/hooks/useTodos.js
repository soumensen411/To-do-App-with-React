import { useState, useEffect } from "react";
const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
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
    setTodos((prev) => [...prev, newTask]);
  }

  function handleDel(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function handleToggle(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }
  return { todos, handleAdd, handleDel, handleToggle };
};

export default useTodos;
