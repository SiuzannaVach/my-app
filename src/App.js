import CounterComponent from "./CounterComponent";
import ListComponent from "./ListComponent";
import TodoComponent from "./TodoComponent";
import RenderComponent from "./RenderComponent";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RenderComponent />
        {/* <ListComponent />
        <CounterComponent />
        <TodoComponent />*/}
      </header>
    </div>
  );
}

export default App;
