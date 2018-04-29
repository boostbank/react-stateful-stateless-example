const id = "GetTodoListEvent";

export default function GetTodoListEvent(success, error, message, list) {
  return {
    id,
    success,
    error,
    message,
    list
  };
}
