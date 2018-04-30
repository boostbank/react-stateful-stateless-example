const eventName = "GetTodoListEvent";

export default function GetTodoListEvent(success, error, message, list) {
  return {
    eventName,
    success,
    error,
    message,
    list
  };
}
