import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "@boostbank/react-stateful";
import TodoComponent from "./components/TodoComponent";

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

    if (this.state.todo !== undefined) {
      todo = (
        <div>
          Current Todo: {this.state.todo}
        </div>
      );
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to react-stateful-stateless example
            <br />
            {todo}
          </h1>
        </header>
        <TodoComponent />
      </div>
    );
  }
}

export default App;
