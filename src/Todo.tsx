
import { useState } from "react";
import { Plus } from "lucide-react";
import { Trash } from "lucide-react";
function Todo() {
    const [todo, setdo] = useState("");
    const [todos, setTodos] = useState<string[]>([]);

          function handleAdd() {
            if (todo.trim() === "") return;

            setTodos([...todos, todo]);
            setdo("");
          }

  function handleDelete(index: number) {
    const newTodos = todos.filter((item, i) => i !== index);
    setTodos(newTodos);
  }

  return (
<div>
    <h1>Todo</h1>

      <input
        value={todo}
        placeholder="Enter task"
        onChange={(e) => setdo(e.target.value)}
      />

      <button onClick={handleAdd}>
        <Plus />
      </button>



      {todos.map((item, index) => (
  <div key={index}>
    <p>{item}</p>

    <button onClick={() => handleDelete(index)}>
      <Trash />
    </button>
  </div>
))}
    </div>
  );
}

export default Todo;
