import { modify } from "@boostbank/stateful";
const id = "SelectTodoReaction";
const eventName = "SelectTodoEvent";

const reaction = event => {
  modify(state => {
    state.selectedTodo = event.todo;
    return state;
  });
};

export default function SelectTodoReaction() {
  return {
    id,
    eventName,
    reaction
  };
}
