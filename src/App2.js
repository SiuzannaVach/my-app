import { useEffect, useState } from "react";
import "./App.css";

function App2() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("componentDidMount useEffect");
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate useEffect");
  }, [value]);

  const handleClick = () => {
    setValue(value + 1);
  };
  return (
    <div className="'App2">
      <header className="App-header">
        <p>{value}</p>
        <button onClick={handleClick}>Click me</button>
      </header>
    </div>
  );
}

export default App2;
