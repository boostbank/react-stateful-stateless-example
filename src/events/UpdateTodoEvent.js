const id = "UpdateTodoEvent";

export default function UpdateTodoEvent(success, error, message, list) {
  return {
    id,
    success,
    error,
    message,
    list
  };
}
