import useTodos from "./hooks/useTodos";
import Header from "./components/Header";
import Todobar from "./components/Todobar";
import TodoLists from "./components/TodoLists";
const App = () => {
  const { todos, handleAdd, handleDel, handleToggle } = useTodos();
  return (
    <div>
      <Header />
      <div className="flex justify-center gap-6 mt-3 text-sm opacity-60">
        {" "}
        <span>📋 Total: {todos.length}</span>
        <span>⌛ pending: {todos.filter((t) => !t.completed).length}</span>
        <span>✅ done: {todos.filter((t) => t.completed).length}</span>
      </div>
      <Todobar onAdd={handleAdd} />
      <div className="flex justify-center">
        <TodoLists todos={todos} onDel={handleDel} onToggle={handleToggle} />
      </div>
    </div>
  );
};

export default App;
