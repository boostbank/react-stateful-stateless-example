import React from "react";
import MockApi from "./../api/MockApi";
import GetTodoListEvent from "./../events/GetTodoListEvent";
import UpdateTodoEvent from "./../events/UpdateTodoEvent";
import { listen, ignore, dispatch } from "@boostbank/stateless";
import SelectTodoEvent from "../events/SelectTodoEvent";

export default class TodoComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      message: "",
      list: []
    };
    this.loadList = this.loadList.bind(this);
    this.onListLoad = this.onListLoad.bind(this);
    this.onListUpdate = this.onListUpdate.bind(this);
  }

  deleteTodo(i) {
    this.setState({
      loading: true,
      message: "Deleting..."
    });
    MockApi.deleteFromList(i);
  }

  loadList() {
    this.setState({
      loading: true,
      message: "Loading..."
    });
    MockApi.loadList();
  }

  onListLoad(event) {
    this.setState({
      loading: false,
      list: event.list
    });
  }

  onListUpdate(event) {
    this.setState({
      loading: false,
      list: event.list
    });
  }

  componentDidMount() {
    listen(GetTodoListEvent().id, this, this.onListLoad);
    listen(UpdateTodoEvent().id, this, this.onListUpdate);
  }

  componentWillUnmount() {
    ignore(GetTodoListEvent().id, this);
    ignore(UpdateTodoEvent().id, this);
  }

  render() {
    let list = null;

    if (this.state.loading) {
      list = this.state.message;
    } else if (this.state.list.length > 0) {
      let i = 0;
      list = this.state.list.map(todo => {
        i++;
        const todoItem = { i, todo };
        return (
          <h4 key={i}>
            {i}: {todoItem.todo}{" "}
            <button
              onClick={() => {
                dispatch(SelectTodoEvent(todoItem.todo));
              }}
            >
              Select
            </button>
            <button
              onClick={() => {
                this.deleteTodo(todoItem.i - 1);
              }}
            >
              Delete
            </button>
          </h4>
        );
      });
    }

    return (
      <div>
        <br />
        <button onClick={this.loadList}>Load List</button>
        <br />
        <h2>Todo List:</h2>
        {list}
      </div>
    );
  }
}
