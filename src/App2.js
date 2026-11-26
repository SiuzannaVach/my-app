import { useEffect, useReducer, useState, useRef } from "react";
import "./App.css";
//import UnmountComponent from "./UnmountComponent";

function App2() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  };

  /* const reducer = (state, action) => {
    if (action.type === "increment") {
      return { count: state.count + 1 };
    }

    if (action.type === "decrement") {
      return { count: state.count - 1 };
    }
    if (action.type === "reset") {
      return { count: 0 };
    }
    if (action.type === "addFive") {
      return { count: state.count + action.payload };
    }
  };
  const [value, dispatch] = useReducer(reducer, { count: 0 });
  //const [isMounted, setIsMounted] = useState(false);

  const handleClick = (type) => {
    dispatch(type);
  };

  /* useEffect(() => {
    console.log("componentDidMount useEffect");
  }, []);

  useEffect(() => {
    console.log("componentDidMount useEffect");
  }, [value]);

  const handleClick = () => {
    //setValue(value + 1);
    setIsMounted(!isMounted);
  };*/
  return (
    <div className="'App2">
      <header className="App-header">
        <input ref={inputRef} />
        <p>text</p>
        <button onClick={handleFocus}>Focus me</button>

        {/* <button onClick={() => handleClick({ type: "increment" })}>Add</button>
        <button onClick={() => handleClick({ type: "decrement" })}>
          Minus
        </button>
        <button onClick={() => handleClick({ type: "reset" })}>Reset</button>
        <button onClick={() => handleClick({ type: "addFive", payload: 5 })}>
          +5
        </button> */}
      </header>
    </div>
  );
}

export default App2;
