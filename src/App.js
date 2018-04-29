import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "@boostbank/react-stateful";

class App extends Component {
  constructor() {
    super();
    this.state = connect(this, store => {
      this.setState({
        todo: store.selectedTodo
      });
    });
  }

  render() {
    let todo = null;

    if (this.state.todo && this.state.todo.name) {
      todo = <h4>Current Todo: {this.state.todo.name}</h4>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to react-stateful-stateless example
          </h1>
          <code>See how these two can work together in harmony</code>
          {todo}
        </header>
      </div>
    );
  }
}

export default App;
