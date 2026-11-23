import CounterComponent from "./CounterComponent";
import ListComponent from "./ListComponent";
import TodoComponent from "./TodoComponent";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListComponent />
        <CounterComponent />
        <TodoComponent />
      </header>
    </div>
  );
}

export default App;
