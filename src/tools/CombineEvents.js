import GetTodoListEvent from "./../events/GetTodoListEvent";
import UpdateTodoEvent from "./../events/UpdateTodoEvent";
import SelectTodoEvent from './../events/SelectTodoEvent';
import { addEvent } from "@boostbank/stateless";

export default function combine() {
  addEvent(GetTodoListEvent().eventName);
  addEvent(UpdateTodoEvent().eventName);
  addEvent(SelectTodoEvent().eventName);
}
