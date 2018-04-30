import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "@boostbank/react-stateful";
import TodoComponent from "./components/TodoComponent";
import DeleteTodoEvent from "./events/DeleteTodoEvent";
import { listen, ignore } from "@boostbank/stateless";

class App extends Component {
  constructor() {
    super();
    this.state = connect(this, store => {
      this.setState({
        todo: store.selectedTodo
      });
    });
    this.onTodoDelete = this.onTodoDelete.bind(this);
  }

  onTodoDelete(event) {
    if(this.state.todo && this.state.todo === event.todo){
      this.setState({
        todo: undefined
      });
    }
  }

  componentDidMount() {
    listen(DeleteTodoEvent().id, this, this.onTodoDelete);
  }

  componentWillUnmount() {
    ignore(DeleteTodoEvent().id, this, this.onTodoDelete);
  }

  render() {
    let todo = null;

    if (this.state.todo !== undefined) {
      todo = <div>Current Todo: {this.state.todo}</div>;
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
