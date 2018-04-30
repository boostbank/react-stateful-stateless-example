const eventName = "SelectTodoEvent";

export default function SelectTodoEvent(todo) {
  return {
    eventName,
    todo
  };
}
