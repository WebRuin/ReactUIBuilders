import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class FormBuilderStore extends EventEmitter {
  constructor() {
    super()
    this.formElements = [
      {
        id: 113464613,
        label: 'Name',
        size: 35
      },
      {
        id: 235684679,
        label: 'Add',
        size: 40,
      },
    ];
  }

  createElement(label, size) {
    const id = Date.now();

    this.formElements.push({
      id,
      label,
      size
    });

    this.emit("change");
  }

  getAll() {
    return this.formElements;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_ELEMENT": {
        this.createElement(
          action.label,
          action.size
        );
        break;
      }
    }
  }

}

const formBuilderStore = new FormBuilderStore;
dispatcher.register(formBuilderStore.handleActions.bind(formBuilderStore));

export default formBuilderStore;
