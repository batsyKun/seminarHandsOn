import React, { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("componentDidMount called");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate called", prevProps, prevState);
  }

  render() {
    console.log("render called");
    return (
      <div>
        <h1>Old Lifecycle Methods Example</h1>
      </div>
    );
  }
}

export default LifecycleDemo;
