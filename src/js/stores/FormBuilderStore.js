import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class FormBuilderStore extends EventEmitter {
  constructor() {
    super()
    this.formElements = [
      {
        id: 113464613,
        label: 'Name'
      },
      {
        id: 235684679,
        label: 'Add'
      },
    ];
  }

  createElement(label) {
    const id = Date.now();
    console.log(label + 'hi')

    this.formElements.push({
      id,
      label
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
          action.label
        );
        break;
      }
    }
  }

}

const formBuilderStore = new FormBuilderStore;
dispatcher.register(formBuilderStore.handleActions.bind(formBuilderStore));

export default formBuilderStore;
