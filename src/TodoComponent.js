import { useState } from "react";

function TodoComponent() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodoHandler = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      addTodoHandler();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="new task"
        value={input}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      />

      <h2>{todos.length}</h2>

      <ul>
        {todos.map((todo, index) => (
          <li key={`${todo}-${index}`}>{todo}</li>
        ))}
      </ul>

      <button onClick={addTodoHandler}>Add TO DO</button>
    </div>
  );
}

export default TodoComponent;
