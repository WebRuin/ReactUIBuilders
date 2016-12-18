import React from "react"

import * as FormBuilderActions from "../actions/FormBuilderActions"
import FormBuilderStore from "../stores/FormBuilderStore"

// Components
import FormBuilder from '../components/FormBuilder.js'

export default class FormUIs extends React.Component {
  constructor() {
    super()
    this.getFormElements = this.getFormElements.bind(this)
    this.state = {
      formElements: FormBuilderStore.getAll(),
    }
  }

  componentWillMount() {
    FormBuilderStore.on("change", this.getFormElements);
  }

  componentWillUnmount() {
    FormBuilderStore.removeListener("change", this.getFormElements);
  }

  getFormElements() {
    this.setState({ formElements: FormBuilderStore.getAll() });
  }

  render() {

    return (
      <div>
        <div className='formBuilder'>
          <h2>Form Builder</h2>
          <FormBuilder formElements={ this.state.formElements } />
        </div>
      </div>
    )
  }
}
