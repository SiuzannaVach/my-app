import { Component } from "react";

class MyClass extends Component {
  state = {
    todos: [],
    input: "",
    timer: 0,
  };

  componentDidMount() {
    this.timerIntervalId = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
    const lsTodos = localStorage.getItem("todos");
    if (lsTodos) {
      this.setState({ todos: JSON.parse(lsTodos) });
    }
    console.log("componentDidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      console.log("componentDidUpdate");
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  addTask = (e) => {
    this.setState({ todos: [...this.state.todos, this.state.input] });
    this.setState({ input: "" });
  };
  clearTodos = () => {
    localStorage.removeItem("todos");
    this.setState({ todos: [] });
  };

  onChangeHandler = (e) => {
    const value = e.target.value;
    this.setState({ input: value });
  };

  componentWillUnmount() {
    clearInterval(this.timerIntervalId);
  }

  render() {
    return (
      <>
        <h2>{this.state.timer}</h2>
        <input value={this.state.input} onChange={this.onChangeHandler} />
        <button onClick={this.addTask}>Add Todo</button>
        <button onClick={this.clearTodos}>Clear Todos</button>
        {this.state.todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
      </>
    );
  }
}

export default MyClass;
