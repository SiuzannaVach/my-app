import React, { useState, useId } from "react";

import TodoList from "./TodoList";
import GrandChildComponent from "./GrandChildComponent";

/*const RenderComponent = () => {
  const firstRender = false;
  const secondRender = true;
  return (
    <>
      {firstRender && <p>I'm firstRenderValue</p>}
      {secondRender && <p>I'm secondRenderValue</p>}
    </>
  );
};

export default RenderComponent;*/

/*const RenderComponent = () => {
  const toDo = [
    { id: 1, todo: "firstTodo" },
    { id: 2, todo: "secondTodo" },
    { id: 3, todo: "thirdTodo" },
    { id: 4, todo: "fourthTodo" },
  ];

  const myName = {
    name: "Karim",
    age: 30,
    city: "New York",
  };
  const myNameArray = ["Karim", 30, "New York"];

  const myFunctionName = () => {
    console.log("Karim", 30, "New York");
  };

  return (
    /*<div>
      {[1, 2, 3, 4].map((item) => (
        <h4>{item}</h4>
      ))}
    </div>
    <div>
      {toDo.map((todo) => {
        console.log(todo);
        return <TodoList key={todo.id} renderTodo={todo.todo} id={todo.id} />;
      })}
    </div>*/

const RenderComponent = () => {
  const id = useId();

  // Стартовый массив из 3 объектов с полями id и name
  const [todos, setTodos] = useState([
    { id: `${id}-1`, name: "Kostya" },
    { id: `${id}-2`, name: "Alice" },
    { id: `${id}-3`, name: "Bob" },
  ]);

  const [inputValue, setInputValue] = useState("");

  // Добавление нового объекта { id, name }
  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: `${id}-${Date.now()}`,
      name: inputValue,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  // Удаление задачи по id
  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((item) => item.id !== todoId));
  };

  return (
    <div>
      <h2>To-Do List</h2>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={handleAddTodo}>Add</button>

      {/* Передача данных и функции удаления в дочерний TodoList */}
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default RenderComponent;
