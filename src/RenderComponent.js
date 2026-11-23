import React from "react";
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

const RenderComponent = () => {
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

    <div>
      <GrandChildComponent
        myName={myName}
        myNameArray={myNameArray}
        myFunctionName={myFunctionName}
      />
    </div>
  );
};

export default RenderComponent;
