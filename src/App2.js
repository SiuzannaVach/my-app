import { useEffect, useState } from "react";
import "./App.css";
import UnmountComponent from "./UnmountComponent";

function App2() {
  const [value, setValue] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    console.log("componentDidMount useEffect");
  }, []);

  useEffect(() => {
    console.log("componentDidMount useEffect");
  }, [value]);

  const handleClick = () => {
    //setValue(value + 1);
    setIsMounted(!isMounted);
  };
  return (
    <div className="'App2">
      <header className="App-header">
        <p>{value}</p>
        {isMounted ? <UnmountComponent /> : <p>Text</p>}
        <button onClick={handleClick}>Click me</button>
      </header>
    </div>
  );
}

export default App2;
