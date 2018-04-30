const eventName = "UpdateTodoEvent";

export default function UpdateTodoEvent(success, error, message, list) {
  return {
    eventName,
    success,
    error,
    message,
    list
  };
}
