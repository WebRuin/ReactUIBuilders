import React from "react";

import * as FormBulderActions from "../actions/FormBuilderActions";
import FormBulderStore from "../stores/FormBuilderStore";

// Styles
import styles from '../../styles/forms.scss'

export default class FormBuilder extends React.Component {

  handleFormSubmit() {
    const label = this.refs.label.value
    this.refs.form.reset()
    FormBulderActions.createElement(label)
  }

  render() {
    const formElementArray = this.props.formElements.map(( element ) =>
      <div key={ element.id } className='field'>
        <label htmlFor={ element.label }>{ element.label }</label>
        <input id={ element.label } />
      </div>
    )

    return(
      <div>
        <form ref='form' onSubmit={ this.handleFormSubmit.bind(this) } >
          <div className='field'>
            <label htmlFor='label'>Field Label</label>
            <input id='label' ref='label' required />
          </div>
          <button className='formButton' type='submit'>Add field</button>
        </form>
        <form>
          { formElementArray }
        </form>
      </div>
    )
  }

}