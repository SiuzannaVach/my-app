import { Component } from "react";

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Siuzanna",
    };
    console.log("MyClassComponent constructor");
  }
  componentDidMount() {
    console.log("MyClassComponent componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.name !== nextProps.name) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("MyClassComponent componentDidUpdate");
  }

  render() {
    console.log("MyClassComponent render");
    return (
      <div>
        <h2>
          This is my class component.
          <p>Hello, {this.state.name}!</p>
        </h2>
      </div>
    );
  }
}

export default MyClassComponent;
