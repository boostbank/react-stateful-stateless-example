import { dispatch } from "@boostbank/stateless";
import GetTodoListEvent from "./../events/GetTodoListEvent";
import UpdateTodoListEvent from "./../events/UpdateTodoEvent";
import DeleteTodoEvent from "./../events/DeleteTodoEvent";

const todo = ["Mow Lawn", "Clean Dishes", "Pay Rent", "Clean Dog"];

export default class MockApi {
  static loadList() {
    setTimeout(() => {
      dispatch(GetTodoListEvent(true, false, "OK", todo));
    }, 1000);
  }

  static addToList(todo) {
    setTimeout(() => {
      todo.push(todo);
      dispatch(UpdateTodoListEvent(true, false, "OK", todo));
    }, 1000);
  }

  static deleteFromList(id) {
    setTimeout(() => {
      const deleted = todo[id];
      todo.splice(id, 1);
      dispatch(DeleteTodoEvent(deleted));
      dispatch(UpdateTodoListEvent(true, false, "OK", todo));
    }, 1000);
  }
}
