import TOdotask from "./components/Todotask";
import Taskbar from "./components/Taskbar";
import Header from "./components/Header";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn Python", completed: true },
    { id: 3, text: "Learn JavaScript", completed: false },
    { id: 4, text: "Learn .Net", completed: true },
  ]);
  function onAdd(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }
  function handleDelete(id) {
    const updateTodo = todos.filter((todos) => todos.id != id);
    setTodos(updateTodo);
  }
  return (
    <div className="flex justify-center flex-col items-center">
      <Header title="To Do List" subTitle="Stay organized stay Productive.!" />
      <TOdotask onAdd={onAdd} />
      <Taskbar todos={todos} onDelete={handleDelete} />
    </div>
  );
};

export default App;
