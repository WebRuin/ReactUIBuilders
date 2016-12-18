import React from "react";

import * as FormBulderActions from "../actions/FormBuilderActions";
import FormBulderStore from "../stores/FormBuilderStore";

// Styles
import styles from '../../styles/forms.scss'

export default class FormBuilder extends React.Component {

  render() {
    const formElementArray = this.props.formElements.map(( element ) =>
      <div key={ element.id } className='field'>
        <label for={ element.label }>{ element.label }</label>
        <input id={ element.label } size={ element.size } />
      </div>
    )

    return(
      <div>
        { formElementArray }
      </div>
    )
  }

}