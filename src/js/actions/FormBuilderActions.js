import dispatcher from "../dispatcher";

export function createTodo(label, type, size, verb) {
  dispatcher.dispatch({
    type: "CREATE_ELEMENT",
    label,
    size
  });
}
