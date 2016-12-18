import dispatcher from "../dispatcher";

export function createElement(label) {
  dispatcher.dispatch({
    type: "CREATE_ELEMENT",
    label
  });
}
