import { Component } from "react";

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Siuzanna",
    };
  }

  render() {
    return (
      <div>
        <h2>This is my class component. Hello, {this.state.name}!</h2>
      </div>
    );
  }
}

export default MyClassComponent;
