import React from "react";

import CounterComponent from "./CounterComponent";
import ListComponent from "./ListComponent";
import TodoComponent from "./TodoComponent";
import RenderComponent from "./RenderComponent";
import MyClassComponent from "./MyClassComponent";
import MyClass from "./MyClass";

import "./App.css";

function App() {
  const [isShowTimer, setIsShowTimer] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {isShowTimer ? <MyClass /> : <MyClassComponent />}
        <button onClick={() => setIsShowTimer((prev) => !prev)}>
          Show Timer
        </button>
        {/*  <RenderComponent />
         
        <CounterComponent />
        <TodoComponent />
        <MyClassComponent />
        <ListComponent />
        <MyClass /> */}
      </header>
    </div>
  );
}

export default App;
