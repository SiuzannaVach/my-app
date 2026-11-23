import React from "react";
import GranChildComponent from "./GrandChildComponent";

const TodoList = (props) => {
  return (
    <>
      <div>{props.renderTodo}</div>
      <GranChildComponent newPropTodo={props.renderTodo} />
    </>
  );
};
export default TodoList;
