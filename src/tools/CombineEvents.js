import GetTodoListEvent from "./../events/GetTodoListEvent";
import UpdateTodoEvent from "./../events/UpdateTodoEvent";
import SelectTodoEvent from './../events/SelectTodoEvent';
import DeleteTodoEvent from './../events/DeleteTodoEvent';
import { addEvent } from "@boostbank/stateless";

export default function combine() {
  addEvent(GetTodoListEvent().id);
  addEvent(UpdateTodoEvent().id);
  addEvent(SelectTodoEvent().id);
  addEvent(DeleteTodoEvent().id);
}
