/*import React from "react";
import GranChildComponent from "./GrandChildComponent";

const TodoList = (props) => {
  return (
    <>
      <div>{props.renderTodo}</div>
      <GranChildComponent newPropTodo={props.renderTodo} />
    </>
  );
};
export default TodoList;*/
import React from "react";

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((item) => (
        <li key={item.id}>
          {item.name}
          {"    "}
          <button onClick={() => props.onDeleteTodo(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
